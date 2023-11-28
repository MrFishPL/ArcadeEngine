import { Game } from "./Game";
import { Line3d } from "./Line3d";
import { Point3d } from "./Point3d";
import { Pair } from "./types";

// Spawnpoints,
// Osie obrotu
// Zwrot
export class GameObject {
  private _inst: Game;
  private _boxCollider: Pair<Point3d>;
  private _isGlowing: boolean;
  private _lines: Array<Line3d>;
  private _dx: number;
  private _dy: number;
  private _dz: number;
  private _posx: number;
  private _posy: number;
  private _posz: number;
  constructor(
    inst: Game,
    isGlowing: boolean,
    dx: number,
    dy: number,
    dz: number,
    posx: number,
    posy: number,
    posz: number,
    boxCollider: Pair<Point3d>,
    lines: Array<Line3d>
  ) {
    this._inst = inst;
    this._boxCollider = boxCollider;
    this._lines = lines;
    this._isGlowing = isGlowing;
    this._dx = dx;
    this._dy = dy;
    this._dz = dz;
    this._posx = posx;
    this._posy = posy;
    this._posz = posz;
  }

  rotatePointY(
    angle: number,
    point: Point3d,
  ): Point3d {
    let mx = point.x - this.dx;
    let my = point.y - this.dy;
    let mz = point.z - this.dz;

    let newx = mx * Math.cos(angle) + mz*Math.sin(angle);
    let newy = my;
    let newz = -mx*Math.sin(angle) + mz*Math.cos(angle);

    return new Point3d(newx + this.dx, newy + this.dy, newz + this.dz);
  }
  
  rotateY(angle: number) {
    this.lines.forEach(line => {
      line.p1 = this.rotatePointY(angle, line.p1);
      line.p2 = this.rotatePointY(angle, line.p2);
    });
  }

  rotatePointX(
    angle: number,
    point: Point3d,
  ): Point3d {
    let mx = point.x - this.dx;
    let my = point.y - this.dy;
    let mz = point.z - this.dz;

    let newx = mx;
    let newy = my*Math.cos(angle) - mz*Math.sin(angle);
    let newz = my*Math.sin(angle) + mz * Math.cos(angle);

    return new Point3d(newx + this.dx, newy + this.dy, newz + this.dz);
  }
  
  rotateX(angle: number) {
    this.lines.forEach(line => {
      line.p1 = this.rotatePointX(angle, line.p1);
      line.p2 = this.rotatePointX(angle, line.p2);
    });
  }

  rotatePointZ(
    angle: number,
    point: Point3d,
  ): Point3d {
    let mx = point.x - this.dx;
    let my = point.y - this.dy;
    let mz = point.z - this.dz;

    let newx = mx * Math.cos(angle) - my * Math.sin(angle);
    let newy = mx * Math.sin(angle) + my * Math.cos(angle);
    let newz = mz;

    return new Point3d(newx + this.dx, newy + this.dy, newz + this.dz);
  }
  
  rotateZ(angle: number) {
    this.lines.forEach(line => {
      line.p1 = this.rotatePointZ(angle, line.p1);
      line.p2 = this.rotatePointZ(angle, line.p2);
    });

    
  }

  // Getters, setters
  get inst() {
    return this._inst;
  }

  get boxCollider() {
    return this._boxCollider;
  }

  get lines() {
    return this._lines;
  }

  get dx() {
    return this._dx;
  }

  get dy() {
    return this._dy;
  }

  get dz() {
    return this._dz;
  }

  set dx(dx: number) {
    this._dx = dx;
  }

  set dy(dy: number) {
    this._dy = dy;
  }

  set dz(dz: number) {
    this._dz = dz;
  }

  get posx() {
    return this._posx;
  }

  get posy() {
    return this._posy;
  }

  get posz() {
    return this._posz;
  }

  set posx(posx: number) {
    this._posx = posx;
  }

  set posy(posy: number) {
    this._posy = posy;
  }
  set posz(posz: number) {
    this._posz = posz;
  }

  get isGlowing() {
    return this._isGlowing;
  }

  set isGlowing(glowing: boolean) {
    this._isGlowing = glowing;
  }
}
