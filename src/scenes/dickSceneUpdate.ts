import { globals } from "../globals";

let p = 0;
export const dickSceneUpdate = () => {
  globals.dick!.rotateY(Math.PI/180);

  globals.dick!.posy = 100 + 100*Math.sin(Math.PI/180 * p);

  p += 10;
};