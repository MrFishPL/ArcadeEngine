import { Point } from "./Point";

export class Point2d extends Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    super([x, y]);
    this._x = x;
    this._y = y;
  }

  // Getters, setter
  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }
}
