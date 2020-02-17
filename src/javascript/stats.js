class Stats {
  constructor(stage) {
    this.stage = stage;
    this.totalBalloons = 0;
    this.hitBalloons = 0;
    this.totalBombs = 0;
    this.hitBombs = 0; 
  }

  increaseTotalBalloons = () => {
    this.totalBalloons += 1; 
  };

  increaseHitBalloons = () => {
    this.hitBalloons += 1; 
  };

  increaseTotalBombs = () => {
    this.totalBombs += 1; 
  };

  increaseHitBombs = () => {
    this.hitBombs += 1; 
  };

  balloonHitPercentage = () => {
    return Math.round(this.hitBalloons/ this.totalBalloons) * 100; 
  };

  bombHitPercentage = () => {
    return Math.round(this.hitBombs/ this.totalBombs) * 100; 
  };

  reset = () => {
    this.totalBalloons = 0;
    this.hitBalloons = 0;
    this.totalBombs = 0;
    this.hitBombs = 0; 
  };
}

export default Stats; 