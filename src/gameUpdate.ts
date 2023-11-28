import { Game } from "../EngineFiles/Game";
let p = Date.now();
let i = 1;

export const gameUpdateFunction = (inst: Game) => {
  if (Date.now() - p > 3000) {
    p = Date.now();
    i *= -1;
    
    if (i == -1) inst.setCurrentScene(inst.scenes[0]);
    else inst.setCurrentScene(inst.scenes[1]);
  } 
};
