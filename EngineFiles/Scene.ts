import { GameCamera } from "./Camera";
import { Game } from "./Game";
import { GameObject } from "./GameObject";
import { Point3d } from "./Point3d";
import { generateUniqueId } from "./functions";
import { OverlapDictionary, OverlapFunction } from "./types";

export class Scene {
  game: Game;
  _camera: GameCamera | undefined;
  private _gameObjects: Array<GameObject> = [];
  private _overlaps: OverlapDictionary = {};
  private _isInitialized = false;
  init: Function;
  updt: Function;

  constructor(
    game: Game,
    init: (gameInstance: Scene) => void,
    updt: (gameInstance: Scene) => void
  ) {
    this.game = game;
    this.init = init;
    this.updt = updt;

    this.initialize();
  }

  initialize(): void {
    if (this._isInitialized) {
      throw new Error("The game is already initialized.");
      return;
    }

    this._isInitialized = true;

    this._isInitialized = true;
    this.init(this);

    // Force a constant frame rate
  }

  update() {
    // Check overlap but include object position and point offset
    Object.values(this._overlaps).forEach((overlap) => {
      // Check overlap but include object position and point offset
      if (
        this.checkOverlap(
          new Point3d(
            overlap[0].boxCollider[0].x + overlap[0].posx,
            overlap[0].boxCollider[0].y + overlap[0].posy,
            overlap[0].boxCollider[0].z + overlap[0].posz
          ),
          new Point3d(
            overlap[0].boxCollider[1].x + overlap[0].posx,
            overlap[0].boxCollider[1].y + overlap[0].posy,
            overlap[0].boxCollider[1].z + overlap[0].posz
          ),
          new Point3d(
            overlap[1].boxCollider[0].x + overlap[1].posx,
            overlap[1].boxCollider[0].y + overlap[1].posy,
            overlap[1].boxCollider[0].z + overlap[1].posz
          ),
          new Point3d(
            overlap[1].boxCollider[1].x + overlap[1].posx,
            overlap[1].boxCollider[1].y + overlap[1].posy,
            overlap[1].boxCollider[1].z + overlap[1].posz
          )
        )
      )
        overlap[2](overlap[0], overlap[1]);
    });

    this.updt(this);

    // Drawing a frame
    this.createFrame();
  }

  private createFrame() {
    this.game.ctx.fillRect(0, 0, this.game.width, this.game.height);
    if (this._camera != undefined) this._camera.projectLines();
  }

  addGUI() {}

  checkSpecificOverlap(id: string) {
    return this.checkOverlap(
      new Point3d(
        this._overlaps[id][0].boxCollider[0].x + this._overlaps[id][0].posx,
        this._overlaps[id][0].boxCollider[0].y + this._overlaps[id][0].posy,
        this._overlaps[id][0].boxCollider[0].z + this._overlaps[id][0].posz
      ),
      new Point3d(
        this._overlaps[id][0].boxCollider[1].x + this._overlaps[id][0].posx,
        this._overlaps[id][0].boxCollider[1].y + this._overlaps[id][0].posy,
        this._overlaps[id][0].boxCollider[1].z + this._overlaps[id][0].posz
      ),
      new Point3d(
        this._overlaps[id][1].boxCollider[0].x + this._overlaps[id][1].posx,
        this._overlaps[id][1].boxCollider[0].y + this._overlaps[id][1].posy,
        this._overlaps[id][1].boxCollider[0].z + this._overlaps[id][1].posz
      ),
      new Point3d(
        this._overlaps[id][1].boxCollider[1].x + this._overlaps[id][1].posx,
        this._overlaps[id][1].boxCollider[1].y + this._overlaps[id][1].posy,
        this._overlaps[id][1].boxCollider[1].z + this._overlaps[id][1].posz
      )
    );
  }

  addOverlap(obj1: GameObject, obj2: GameObject, f: OverlapFunction): string {
    const uuid = generateUniqueId();
    this._overlaps[uuid] = [obj1, obj2, f];
    return uuid;
  }

  private checkOverlap(
    p1: Point3d,
    p2: Point3d,
    p3: Point3d,
    p4: Point3d
  ): boolean {
    return (
      Math.max(Math.min(p1.x, p2.x), Math.min(p3.x, p4.x)) <=
        Math.min(Math.max(p1.x, p2.x), Math.max(p3.x, p4.x)) &&
      Math.max(Math.min(p1.y, p2.y), Math.min(p3.y, p4.y)) <=
        Math.min(Math.max(p1.y, p2.y), Math.max(p3.y, p4.y)) &&
      Math.max(Math.min(p1.z, p2.z), Math.min(p3.z, p4.z)) <=
        Math.min(Math.max(p1.z, p2.z), Math.max(p3.z, p4.z))
    );
  }

  addGameObject(obj: GameObject) {
    this._gameObjects.push(obj);
    this._gameObjects.sort((a: GameObject, b: GameObject) => b.posx - a.posx);
  }

  createCamera(fov: number) {
    this._camera = new GameCamera(this.game, fov);
  }

  get gameObjects() {
    return this._gameObjects;
  }

  get overlaps() {
    return this._overlaps;
  }
}
