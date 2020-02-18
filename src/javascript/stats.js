class Stats {
  constructor(stage) {
    this.stage = stage;
    this.totalCorgis = 0;
    this.tagCorgis = 0;
    this.totalBread = 0;
    this.tagBread = 0; 

    this.increaseTotalCorgis = this.increaseTotalCorgis.bind(this);
    this.increaseTagCorgis = this.increaseTagCorgis.bind(this);
    this.increaseTotalBread = this.increaseTotalBread.bind(this);
    this.increaseTagBread = this.increaseTagBread.bind(this);
    this.corgiTagPercentage = this.corgiTagPercentage.bind(this);
    this.breadTagPercentage = this.breadTagPercentage.bind(this);
    this.reset = this.reset.bind(this); 
  }

  increaseTotalCorgis() {
    this.totalCorgis += 1; 
  };

  increaseTagCorgis() {
    this.tagCorgis += 1; 
  };

  increaseTotalBread() {
    this.totalBread += 1; 
  };

  increaseTagBread() {
    this.tagBread += 1; 
  };

  corgiTagPercentage() {
    return Math.round(this.tagCorgis / this.totalCorgis * 10000) / 100; 
  };

  breadTagPercentage() {
    return Math.round(this.tagBread / this.totalBread * 10000) / 100; 
  };

  reset() {
    this.totalCorgis = 0;
    this.tagCorgis = 0;
    this.totalBread = 0;
    this.tagBread = 0; 
  };
}

export default Stats; 