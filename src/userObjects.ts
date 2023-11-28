import { Point3d } from "../EngineFiles/Point3d";
import { Line3d } from "../EngineFiles/Line3d";

export let sq1Lines = [
  // Bottom
  new Line3d("#00ff00", [new Point3d(-100, 0, 100), new Point3d(100, 0, 100)]),

  new Line3d("#00ff00", [
    new Point3d(-100, 0, 100),
    new Point3d(-100, 0, -100),
  ]),

  new Line3d("#00ff00", [new Point3d(100, 0, 100), new Point3d(100, 0, -100)]),

  new Line3d("#00ff00", [
    new Point3d(100, 0, -100),
    new Point3d(-100, 0, -100),
  ]),

  // Top
  new Line3d("#00ff00", [
    new Point3d(-100, 200, 100),
    new Point3d(100, 200, 100),
  ]),

  new Line3d("#00ff00", [
    new Point3d(-100, 200, 100),
    new Point3d(-100, 200, -100),
  ]),

  // Itd...

  new Line3d("#00ff00", [
    new Point3d(100, 200, 100),
    new Point3d(100, 200, -100),
  ]),

  new Line3d("#00ff00", [
    new Point3d(100, 200, -100),
    new Point3d(-100, 200, -100),
  ]),

  // Walls
  new Line3d("#00ff00", [
    new Point3d(-100, 0, 100),
    new Point3d(-100, 200, 100),
  ]),

  new Line3d("#00ff00", [new Point3d(100, 0, 100), new Point3d(100, 200, 100)]),

  new Line3d("#00ff00", [
    new Point3d(100, 0, -100),
    new Point3d(100, 200, -100),
  ]),

  new Line3d("#00ff00", [
    new Point3d(-100, 0, -100),
    new Point3d(-100, 200, -100),
  ]),
];

export let sq2Lines = [
  // Bottom
  new Line3d("#00ff00", [new Point3d(-100, 0, 100), new Point3d(100, 0, 100)]),

  new Line3d("#00ff00", [
    new Point3d(-100, 0, 100),
    new Point3d(-100, 0, -100),
  ]),

  new Line3d("#00ff00", [new Point3d(100, 0, 100), new Point3d(100, 0, -100)]),

  new Line3d("#00ff00", [
    new Point3d(100, 0, -100),
    new Point3d(-100, 0, -100),
  ]),

  // Top
  new Line3d("#00ff00", [
    new Point3d(-100, 200, 100),
    new Point3d(100, 200, 100),
  ]),

  new Line3d("#00ff00", [
    new Point3d(-100, 200, 100),
    new Point3d(-100, 200, -100),
  ]),

  // Itd...

  new Line3d("#00ff00", [
    new Point3d(100, 200, 100),
    new Point3d(100, 200, -100),
  ]),

  new Line3d("#00ff00", [
    new Point3d(100, 200, -100),
    new Point3d(-100, 200, -100),
  ]),

  // Walls
  new Line3d("#00ff00", [
    new Point3d(-100, 0, 100),
    new Point3d(-100, 200, 100),
  ]),

  new Line3d("#00ff00", [new Point3d(100, 0, 100), new Point3d(100, 200, 100)]),

  new Line3d("#00ff00", [
    new Point3d(100, 0, -100),
    new Point3d(100, 200, -100),
  ]),

  new Line3d("#00ff00", [
    new Point3d(-100, 0, -100),
    new Point3d(-100, 200, -100),
  ]),
];

export let dickLines = [
  // Bottom
  new Line3d("#00ff00", [new Point3d(-200, 0, 0), new Point3d(-100, 0, 0)]),
  new Line3d("#00ff00", [new Point3d(-200, 0, 0), new Point3d(-300, 100, 0)]),
  new Line3d("#00ff00", [new Point3d(-300, 200, 0), new Point3d(-300, 100, 0)]),
  new Line3d("#00ff00", [new Point3d(-300, 200, 0), new Point3d(-200, 300, 0)]),
  new Line3d("#00ff00", [new Point3d(-100, 300, 0), new Point3d(-200, 300, 0)]),

  new Line3d("#00ff00", [new Point3d(-100, 300, 0), new Point3d(-100, 650, 0)]),
  new Line3d("#00ff00", [new Point3d(-50, 700, 0), new Point3d(-100, 650, 0)]),
  new Line3d("#00ff00", [new Point3d(-50, 700, 0), new Point3d(50, 700, 0)]),
  new Line3d("#00ff00", [new Point3d(100, 650, 0), new Point3d(50, 700, 0)]),
  new Line3d("#00ff00", [new Point3d(100, 650, 0), new Point3d(100, 300, 0)]),

  new Line3d("#00ff00", [new Point3d(200, 0, 0), new Point3d(100, 0, 0)]),
  new Line3d("#00ff00", [new Point3d(200, 0, 0), new Point3d(300, 100, 0)]),
  new Line3d("#00ff00", [new Point3d(300, 200, 0), new Point3d(300, 100, 0)]),
  new Line3d("#00ff00", [new Point3d(300, 200, 0), new Point3d(200, 300, 0)]),
  new Line3d("#00ff00", [new Point3d(100, 300, 0), new Point3d(200, 300, 0)]),
 
  new Line3d("#00ff00", [new Point3d(-50, 50, 0), new Point3d(50, 50, 0)]),
  new Line3d("#00ff00", [new Point3d(100, 0, 0), new Point3d(50, 50, 0)]),
  new Line3d("#00ff00", [new Point3d(-100, 0, 0), new Point3d(-50, 50, 0)]),

  new Line3d("#00ff00", [new Point3d(-100, 600, 0), new Point3d(100, 600, 0)]),
  new Line3d("#00ff00", [new Point3d(0, 600, 0), new Point3d(0, 700, 0)]),
];
