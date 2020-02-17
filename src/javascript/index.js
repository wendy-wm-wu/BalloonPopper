import Game from './game';
import Pause from './pause';
import { restart, start, resize, corgiTagPercentage, breadTagPercentage } from './text';

document.addEventListener('DOMContentLoaded', () => {
  window.stage = stage; 
  const canvas = document.getElementById('canvas');
  const stage = new createjs.Stage(canvas);
  const game = new Game(canvas, stage);
  const { score, stats } = game; 
  const pause = new Pause(stage, game);
  stage.enableMouseOver(20);

  const tag = new createjs.Shape();
  tag.graphics.beginFill("#000").drawRect(-210, -270, canvas.width, canvas.height); 
  start.hitArea = tag; 
  resize(start); 
  resize(start, restart, corgiTagPercentage, breadTagPercentage); 
  stage.addChild(start, restart, corgiTagPercentage, breadTagPercentage); 
  stage.update(); 

  start.addEventListener("click", (e) => {
    stage.removeChild(start, restart, corgiTagPercentage, breadTagPercentage);
    restart.text = "(Click anywhere to restart)";
    game.start(61000);
  });
}); 