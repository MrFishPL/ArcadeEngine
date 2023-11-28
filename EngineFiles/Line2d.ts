import { Line } from "./Line";
import { Pair } from "./types";
import { Point2d } from "./Point2d";

export class Line2d extends Line {
  constructor(color: string, points: Pair<Point2d>) {
    super(color, points);
  }
}
