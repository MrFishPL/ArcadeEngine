import { Game } from "../EngineFiles/Game";
import { Scene } from "../EngineFiles/Scene";
import { globals } from "./globals";
import { dickSceneInit } from "./scenes/dickSceneInit";
import { dickSceneUpdate } from "./scenes/dickSceneUpdate";

import { twoCubesSceneInit } from "./scenes/twoCubesSceneInit";
import { twoCubesSceneUpdate } from "./scenes/twoCubesSceneUpdate";

export const gameInitFunction = (inst: Game) => {
  globals.sc1 = new Scene(inst, twoCubesSceneInit, twoCubesSceneUpdate)
  globals.sc2 = new Scene(inst, dickSceneInit, dickSceneUpdate)

  inst.addScene(globals.sc1);
  inst.addScene(globals.sc2);
  inst.setCurrentScene(globals.sc1);
  inst.setCurrentScene(globals.sc2);
};

// Update ustawione jest na intervale