import { play, pause } from './text'; 

class Pause {
  constructor(stage, game) {
    this.stage = stage;
    this.game = game;

    this.pause = pause;
    this.play = play; 
    this.game.stage.addChild(this.pause); 

    this.paused = false; 
    this.addClick = this.addClick.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.unpauseGame = this.unpauseGame.bind(this);
  }
  addClick(button) {
    button.addEventListener('click', () => {
      if (this.paused) {
        this.unpauseGame();
      } else {
        this.pauseGame(); 
      }
      this.stage.update(); 
    });
  };

  pauseGame() {
    this.stage.removeChild(this.pause);
    this.paused = true;
    this.game.pause(); 
    document.getElementById('modal').style.display = "flex"; 
    document.getElementById('playBtn').style.display = "block";
  };

  unpauseGame() {
    this.stage.addChild(this.pause);
    this.paused = false; 
    this.game.unpause(this.game.timer.timeLeft * 1000); 
    document.getElementById('modal').style.display = "none"; 
  };
}

export default Pause; 