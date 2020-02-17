import Timer from './timer'; 
import Stats from './stats';
import Score from './score';
import Projectile from './projectile';

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.timer = new Timer(stage);
    this.score = new Score(stage, this.timer); 
    this.stats = new Stats(stage);
    this.currentBTickers = {};
    this.started = false; 
  }
  start = time => {
    this.started = true;
    this.beginGame = setInterval(this.generateCorgis, 2000); 
    this.timer.start(); 
    
    this.endTimer = setTimeout(() => {
      
    })
  };

  end = () => {

  };

  generateCorgis = () => {
    const numCorgis = (Math.random() * 3) + 1; 
    for (let i = 0; i < numCorgis.length; i++) {
       const c = new Projectile(this.canvas, this.stage, this.score, this.stats, this.currentBTickers); 
       this.currentBTickers[c.interval] = c; 
    }
  };

  pause = () => {

  };

  unpause = () => {

  };
}

export default Game; 