import { Game } from "./Game";
import { Point2d } from "./Point2d";
import { Point3d } from "./Point3d";

export class GameCamera {
  _game: Game;
  fov: number; // Field of View
  aspectRatio: number;
  cameraPoint: Point3d;

  constructor(game: Game, fov: number) {
    this._game = game;
    this.fov = fov;
    this.aspectRatio = game.width / game.height;

    // Kamera znajduje się w takim punkcie, że x = 0, y jest na górze ekranu,
    // a z wynosi tyle, żeby kąt widzenia idealnie pokrywał się z rogami ekranu.
    this.cameraPoint = new Point3d(
      0,
      this.game.height,
      game.width / 2 / Math.tan((Math.PI / 180) * (fov / 2))
    );
  }

  projectLines() {
    if (this.game.currentScene == undefined) return;

    this.game.currentScene.gameObjects.forEach((obj) => {
      obj.lines.forEach((line) => {
        const p1 = this.mathematicallyProjectPoint(
          new Point3d(
            line.p1.x + obj.posx,
            line.p1.y + obj.posy,
            line.p1.z + obj.posz
          )
        )!;

        const p2 = this.mathematicallyProjectPoint(
          new Point3d(
            line.p2.x + obj.posx,
            line.p2.y + obj.posy,
            line.p2.z + obj.posz
          )
        )!;

        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = line.color;

        // Ficzer - obiekt może mieć poświatę, jest wtedy bardziej wyraźny
        if (obj.isGlowing) {
          this.game.ctx.shadowBlur = 1;
          this.game.ctx.shadowColor = line.color;
        }

        this.game.ctx.moveTo(
          this.game.width / 2 + p1.x,
          this.game.height - p1.y
        );
        this.game.ctx.lineTo(
          this.game.width / 2 + p2.x,
          this.game.height - p2.y
        );
        this.game.ctx.stroke();

        // Koniec ficzera
        this.game.ctx.shadowBlur = 0;
        this.game.ctx.shadowColor = "transparent";
      });
    });
  }

  protected mathematicallyProjectPoint(point: Point3d): Point2d | null {
    // Punkt przecięcia nie istnieje
    if (point.z - this.cameraPoint.z == 0) return null;

    // Punkt przecięcia z płaszczyzną z=0 (ekranem)
    const t = -point.z / (this.cameraPoint.z - point.z);
    const tx = point.x + t * (this.cameraPoint.x - point.x);
    const ty = point.y + t * (this.cameraPoint.y - point.y);

    return new Point2d(tx, ty);
  }

  get game() {
    return this._game;
  }
}
