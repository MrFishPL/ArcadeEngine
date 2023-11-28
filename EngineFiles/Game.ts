import { GameCamera } from "./Camera";
import { GameObject } from "./GameObject";
import { GameMethod, OverlapFunction } from "./types";
import { generateUniqueId } from "./functions";
import { OverlapDictionary } from "./types";
import { Scene } from "./Scene";

export class Game {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _height: number;
  private _width: number;
  private _fps: number;
  private _isInitialized = false;
  private _scenes: Array<Scene> = [];
  private _currentScene: Scene | undefined;
  _camera: GameCamera | undefined;
  private _gameObjects: Array<GameObject> = [];
  private _overlaps: OverlapDictionary = {};
  init: Function;
  updt: Function;
  constructor(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    fps: number,
    init: GameMethod,
    update: GameMethod
  ) {
    this._canvas = canvas;
    this._width = width;
    this._height = height;
    this._canvas.width = this._width;
    this._canvas.height = this._height;
    this._ctx = this._canvas.getContext("2d")!;
    this._fps = fps;
    this.init = init;
    this.updt = update;
  }

  addScene(scene: Scene) {
    this._scenes.push(scene);
  }

  setCurrentScene(scene: Scene) {
    if (!this._scenes.includes(scene))
      throw new Error("This scene is not added to current object.");
    this._currentScene = scene;
  }

  // Method to run initialize inside the engine
  initialize(): void {
    if (this._isInitialized) {
      throw new Error("The game is already initialized.");
      return;
    }

    this._isInitialized = true;

    this._isInitialized = true;
    this.init(this);

    // Force a constant frame rate
    setInterval(
      () => requestAnimationFrame(this.update.bind(this)),
      1000 / this._fps
    );
  }

  addOverlap(obj1: GameObject, obj2: GameObject, f: OverlapFunction): string {
    const uuid = generateUniqueId();
    this._overlaps[uuid] = [obj1, obj2, f];
    return uuid;
  }

  private update(): void {
    // User update
    this.updt(this);

    if (this._currentScene != undefined) this._currentScene.update();
  }

  // Getters, setters
  get ctx() {
    return this._ctx;
  }

  set ctx(ctx: CanvasRenderingContext2D) {
    this._ctx = ctx;
  }

  get width() {
    return this._width;
  }

  set width(width: number) {
    this._width = width;
  }

  get height() {
    return this._width;
  }

  set height(width: number) {
    this._width = width;
  }

  get gameObjects() {
    return this._gameObjects;
  }

  get overlaps() {
    return this._overlaps;
  }

  get fps() {
    return this._fps;
  }

  get currentScene() {
    return this._currentScene;
  }

  get scenes() {
    return this._scenes;
  }
}
