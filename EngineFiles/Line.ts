import { Point } from "./Point";

export abstract class Line {
  private _points: Array<Point>;
  private _color: string;
  constructor(color: string, points: Array<Point>) {
    this._points = points;
    this._color = color;
  }

  // Getters, setters
  set color(color: string) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  get points() {
    return this._points;
  }
}
