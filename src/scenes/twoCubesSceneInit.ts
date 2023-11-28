import { GameObject } from "../../EngineFiles/GameObject";
import { Line3d } from "../../EngineFiles/Line3d";
import { Point3d } from "../../EngineFiles/Point3d";
import { Scene } from "../../EngineFiles/Scene";
import { globals } from "../globals";
import { sq1Lines, sq2Lines } from "../userObjects";

export const twoCubesSceneInit = (sceneinst: Scene) => {
  // Example game object
  globals.sq = new GameObject(
    sceneinst.game,
    true,
    0,
    100,
    0,
    -400,
    720,
    -900,
    [new Point3d(-100, 0, 100), new Point3d(100, 200, -100)],
    sq1Lines
  );

  globals.sq2 = new GameObject(
    sceneinst.game,
    true,
    0,
    100,
    0,
    -400,
    720,
    -900,
    [new Point3d(-100, 0, 100), new Point3d(100, 200, -100)],
    sq2Lines
  );


  sceneinst.addGameObject(globals.sq);
  sceneinst.addGameObject(globals.sq2);

  let lines = [];
  for (let i = -10; i < 40; i++) {
    lines.push(
      new Line3d("#ff0000", [
        new Point3d(-7200, 719, 100 * -i),
        new Point3d(7200, 719, 100 * -i),
      ])
    );
  }

  globals.f = new GameObject(
    sceneinst.game,
    false,
    0,
    0,
    0,
    0,
    0,
    0,
    [new Point3d(-100, 720, 100), new Point3d(100, 720, -100)],
    lines
  );

  sceneinst.addGameObject(globals.f);
  sceneinst.createCamera(90);

  globals.ov = sceneinst.addOverlap(globals.sq, globals.sq2, () => {});
};