class Stats {
  constructor(stage) {
    this.stage = stage;
    this.totalCorgis = 0;
    this.tagCorgis = 0;
    this.totalBombs = 0;
    this.tagBombs = 0; 
  }

  increaseTotalCorgis = () => {
    this.totalCorgis += 1; 
  };

  increaseTagCorgis = () => {
    this.tagCorgis += 1; 
  };

  increaseTotalBombs = () => {
    this.totalBombs += 1; 
  };

  increaseHitBombs = () => {
    this.hitBombs += 1; 
  };

  corgiTagPercentage = () => {
    return Math.round(this.tagCorgis/ this.totalCorgis) * 100; 
  };

  bombTagPercentage = () => {
    return Math.round(this.hitBombs/ this.totalBombs) * 100; 
  };

  reset = () => {
    this.totalCorgis = 0;
    this.tagCorgis = 0;
    this.totalBombs = 0;
    this.hitBombs = 0; 
  };
}

export default Stats; 