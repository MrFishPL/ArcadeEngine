import "./style.css";
import { Game } from "../EngineFiles/Game";
import { gameUpdateFunction } from "./gameUpdate";
import { gameInitFunction } from "./gameInit";

export const game = new Game(
  document.querySelector("canvas")!,
  1280,
  720,
  60,
  gameInitFunction,
  gameUpdateFunction
);

// Sceny
// Gui (klikalne elementy)
// Boom
// Wykrywanie klawiszy

game.initialize();
