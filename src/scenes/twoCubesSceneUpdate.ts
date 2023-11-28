import { Scene } from "../../EngineFiles/Scene";
import { globals } from "../globals";
import { sq1Lines } from "../userObjects";

export const  twoCubesSceneUpdate = (sceneinst: Scene) => {
  if (globals.sq!.posx > 500 || globals.sq!.posx <= -1200) globals.d *= -1;
  globals.sq!.posx += globals.d;
  globals.sq2!.posz += globals.d;

  if (sceneinst.checkSpecificOverlap(globals.ov)) sq1Lines.forEach(line => {
    line.color = "#ffffff"
  });

  if (!sceneinst.checkSpecificOverlap(globals.ov)) sq1Lines.forEach(line => {
    line.color = "#00ff00"
  });

  globals.sq!.rotateX(Math.PI/180*3);
  globals.sq!.rotateY(Math.PI/180*3);

};