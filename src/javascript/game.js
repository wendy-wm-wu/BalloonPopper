import Timer from './timer'; 
import Stats from './stats';
import Score from './score';

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

  };

  generateCorgis = () => {
    const numCorgis = (Math.random() * 4) + 1; 
    for (let i = 0; i < numCorgis.length; i++) {
      console.log(numCorgis[i]); 
    }
  };
}

export default Game; 