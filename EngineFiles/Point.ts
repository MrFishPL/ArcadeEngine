export class Point {
  private _coords: Array<number>;
  constructor(coords: Array<number>) {
    this._coords = coords;
  }

  get coords() {
    return this._coords;
  }
}
