import { Line } from "./Line";
import { Pair } from "./types";
import { Point3d } from "./Point3d";

export class Line3d extends Line {
  private _p1: Point3d;
  private _p2: Point3d;
  constructor(color: string, points: Pair<Point3d>) {
    super(color, points);
    this._p1 = points[0];
    this._p2 = points[1];
  }

  public get p1() {
    return this._p1;
  }

  public get p2() {
    return this._p2;
  }

  set p1(point: Point3d) {
    this._p1 = point;
  }

  set p2(point: Point3d) {
    this._p2 = point;
  }
}
