class Timer {
  constructor(stage) {
    this.stage = stage;
    this.timeLeft = 60;
    this.time = new createjs.Text('60', 'bold 35px Gloria Hallelujah', '#000000');
    this.time.x = 840;
    this.time.y = 670;
    this.stage.addChild(this.time); 

    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }
  start() {
    this.timer = setInterval(() => {
      this.timeLeft -= 1;
      this.time.text = this.timeLeft; 
      this.stage.addChild(this.time); 
      this.stage.update();
    }, 1000);
  };

  pause() {
    clearInterval(this.timer);
  };

  reset() {
    clearInterval(this.timer);
    this.timeLeft = 60;
    this.time.text = this.timeLeft;
  };
}

export default Timer; 