import { Point } from "./Point";

export class Point3d extends Point {
  private _x: number;
  private _y: number;
  private _z: number;
  constructor(x: number, y: number, z: number) {
    super([x, y, z]);
    this._x = x;
    this._y = y;
    this._z = z;
  }

  // Getters, setter
  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get z() {
    return this._z;
  }

  set z(z: number) {
    this._z = z;
  }

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }
}
