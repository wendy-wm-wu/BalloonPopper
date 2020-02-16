import Timer from './timer'; 

class Game {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.timer = new Timer(stage);
    //score
    //stats
    this.currentBTickers = {};
    this.started = false; 
  }
  start = time => {
    this.started = true;

  };

  generateBalloons = () => {
    const numBalloons = (Math.random() * 4) + 1; 
    for (let i = 0; i < numBalloons.length; i++) {
      console.log(numBalloons[i]); 
    }
  };

}

export default Game; 