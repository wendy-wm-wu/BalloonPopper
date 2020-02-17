class Stats {
  constructor(stage) {
    this.stage = stage;
    this.totalCorgis = 0;
    this.tagCorgis = 0;
    this.totalBread = 0;
    this.tagBread = 0; 
  }

  increaseTotalCorgis = () => {
    this.totalCorgis += 1; 
  };

  increaseTagCorgis = () => {
    this.tagCorgis += 1; 
  };

  increaseTotalBread = () => {
    this.totalBread += 1; 
  };

  increaseTagBread = () => {
    this.tagBread += 1; 
  };

  corgiTagPercentage = () => {
    return Math.round(this.tagCorgis/ this.totalCorgis) * 100; 
  };

  breadTagPercentage = () => {
    return Math.round(this.tagBread/ this.totalBread) * 100; 
  };

  reset = () => {
    this.totalCorgis = 0;
    this.tagCorgis = 0;
    this.totalBread = 0;
    this.tagBread = 0; 
  };
}

export default Stats; 