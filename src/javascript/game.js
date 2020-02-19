import Timer from './timer'; 
import Stats from './stats';
import Score from './score';
import Projectile from './projectile';
import { start, restart, pause, resize, corgiTagPercentage, breadTagPercentage } from './text'; 

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.timer = new Timer(stage);
    this.score = new Score(stage, this.timer); 
    this.stats = new Stats(stage);
    this.currentBTickers = {};
    this.started = false; 
    
    this.generateCorgis = this.generateCorgis.bind(this);
    this.start = this.start.bind(this); 
    this.end = this.end.bind(this); 
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this); 
  }

  generateCorgis() {
    const numCorgis = (Math.random() * 3) + 1; 
    for (let i = 0; i < numCorgis; i++) {
       const c = new Projectile(this.canvas, this.stage, this.score, this.stats, this.currentBTickers); 
       this.currentBTickers[c.interval] = c; 
    }
  };

  start(time) {
    this.started = true;
    this.beginGame = setInterval(this.generateCorgis, 2000); 
    this.timer.start(); 
    this.stage.addChild(pause);
    this.stage.update();
    
    this.endTimer = setTimeout(() => {
      start.text = `Game over! Your score was ${this.score.score}`; 
      corgiTagPercentage.text = `Corgis Tagged: ${this.stats.corgiTagPercentage()}%`;
      breadTagPercentage.text = `Bread Avoided: ${100 - this.stats.breadTagPercentage()}%`;
      this.end(); 
      resize(start, corgiTagPercentage, breadTagPercentage); 
      this.stage.addChild(start, restart, corgiTagPercentage, breadTagPercentage); 
    }, time);
  };

  end() {
    this.started = false; 
    this.score.reset();
    this.stats.reset();
    this.timer.reset(); 
    
    this.stage.removeAllChildren();
    this.stage.addChild(this.score.scoreText, this.timer.time);
    clearInterval(this.beginGame); 
  };


  pause() {
    clearInterval(this.beginGame); 
    clearInterval(this.endTimer);
    Object.keys(this.currentBTickers).forEach(int => clearInterval(int)); 
    this.timer.pause(); 
  };

  unpause(time) {
    const corgis = Object.values(this.currentBTickers);
    corgis.forEach(corgi => corgi.setMotion()); 
    this.start(time); 
  };
}

export default Game; 