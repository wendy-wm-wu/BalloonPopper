class Corgi {
  constructor(canvas, stage, score, stats) {
    this.canvas = canvas;
    this.stage = stage;
    this.score = score;
    this.stats = stats; 

    const dirs = [1, -1];
    this.direction = dirs[Math.floor(Math.random() * 2)]; 
  }
  generateBalloon = interval => {
    const randomKey = Math.floor(Math.random() * 6);  
    //TODO: set balloon variable

    if (randomKey === 4 || randomKey === 5) {
      corgi.type = "corgi";
      this.stats.increaseTotalBombs();
    } else {
      corgi.type = "bomb";
      this.stats.increaseTotalBalloons(); 
    }

  };

  deleteBalloon = () => {

  };

  popBalloon = () => {

  };

  balloonReaction = () => {

  };
}

export default Corgi; 