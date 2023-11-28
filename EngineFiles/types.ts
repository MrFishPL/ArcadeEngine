import { Game } from "./Game";
import { GameObject } from "./GameObject";

export type Pair<T> = [T, T];
export type Overlap = [GameObject, GameObject, OverlapFunction];
export type Vector2d = [number, number];
export type Vector3d = [number, number, number];
export type GameMethod = (gameInstance: Game) => void;
export type OverlapFunction = (obj1: GameObject, obj2: GameObject) => void;
export type OverlapDictionary = Record<string, [GameObject, GameObject, OverlapFunction]>;