import { pause } from './text'; 

class Score {
  constructor(stage, timer) {
    this.stage = stage;
    this.timer = timer;
    this.score = 0;
    this.scoreText = new createjs.Text(`Score: ${this.score}`, 'bold 45px Hallelujah', '#000000');
    this.scoreText.y = 15; 
    this.stage.addChild(this.scoreText); 

    this.fixWidth = this.fixWidth.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.reset = this.reset.bind(this);
  }
  fixWidth() {
    const startWidth = this.scoreText.getBounds().width; 
    this.scoreText.x = (900 - startWidth) / 2; 
  };

  updateScore(type) {
    if (type === 'balloon') {
      this.score += 10; 
    } else {
      this.score -= 50; 
      this.stage.removeAllChildren(); 
      this.stage.addChild(this.scoreText, this.timer.time, pause); 
    }
    this.scoreText.text = `Score: ${this.score}`; 
    this.fixWidth(); 
  };

  reset() {
    this.score = 0; 
    this.scoreText.text = `Score: ${this.score}`; 
  };
}

export default Score; 