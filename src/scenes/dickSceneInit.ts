import { GameObject } from "../../EngineFiles/GameObject";
import { Point3d } from "../../EngineFiles/Point3d";
import { Scene } from "../../EngineFiles/Scene";
import { globals } from "../globals";
import { dickLines, sq1Lines, sq2Lines } from "../userObjects";

export const dickSceneInit = (sceneinst: Scene) => {
  globals.dick = new GameObject(
    sceneinst.game,
    true,
    0,
    0,
    0,
   0,
    100,
    -1000,
    [new Point3d(-100, 0, 100), new Point3d(100, 200, -100)],
    dickLines
  );

  sceneinst.addGameObject(globals.dick);
  sceneinst.createCamera(90);
};