import { yikes, beCareful } from './text';

const corgiImages = {
  0: '../images/corgi.png',
  1: '../images/corgi1.png',
  2: '../images/corgi2.png',
  3: '../images/bread.png',
  4: '../images/bread1.png',
}

const candyImages = {
  0: '../images/candy.png',
  1: '../images/candy2.png',
  2: '../images/candy3.png',
  3: '../images/candy4.png',
}

class Corgi {
  constructor(canvas, stage, score, stats) {
    this.canvas = canvas;
    this.stage = stage;
    this.score = score;
    this.stats = stats; 

    const dirs = [1, -1];
    this.direction = dirs[Math.floor(Math.random() * 2)]; 

    this.generateCorgi = this.generateCorgi.bind(this);
    this.addListener = this.addListener.bind(this);
    this.corgiReaction = this.corgiReaction.bind(this);
    this.tagCorgi = this.tagCorgi.bind(this);
    this.dropCandy = this.dropCandy.bind(this);
    this.deleteCorgi = this.deleteCorgi.bind(this);
  }

  generateCorgi(interval) {
    const randomKey = Math.floor(Math.random() * 5);  
    const corgi = new createjs.Bitmap(corgiImages[randomKey])

    if (randomKey === 3 || randomKey === 4) {
      corgi.type = "bomb";
      this.stats.increaseTotalBread();
    } else {
      corgi.type = "corgi";
      this.stats.increaseTotalCorgis(); 
    }

    const tag = new createjs.Shape(); 
    tag.beginFill('#000').drawRect(0, 20, 90, 70); 
    corgi.hitArea = tag; 

    corgi.x = Math.round(Math.random() * this.canvas.width);
    corgi.y = 800; 
    corgi.rotation = Math.random() * 360; 
    this.stage.addChild(this.corgi); 
    
    return corgi; 
  };

  addListener(corgi, interval) {
    corgi.addEventListener('mouseover', () => {
      const type = corgi.type; 
      
      this.corgiReaction(corgi, type); 
      this.deleteCorgi(corgi, interval);
      this.stage.update();
    });
  };
  
  corgiReaction(corgi, type) {
    this.score.updateScore(type);

    if (type === "corgi") {
      this.tagCorgi(corgi);
      this.dropCandy(corgi);
      this.stats.increaseTagCorgis();
    } else if (type === "bomb") {
      this.stats.increaseTagBread();
      this.stage.addChild(yikes, beCareful);
      setTimeout(() => this.stage.removeChild(yikes, beCareful), 1500); 
    }
  };
  
  tagCorgi(corgi) {
    const candy = new createjs.Bitmap('../images/happy_corgi.png');
    candy.x = corgi.x;
    candy.y = corgi.y; 
    this.stage.addChild(candy);
    setTimeout(() => this.stage.removeChild(candy), 750); 
  };
  
  dropCandy(corgi) {
    const randomKey = Math.floor(Math.random() * 4);
    const droppedCandy = new createjs.Bitmap(candyImages[randomKey]); 
    droppedCandy.x = corgi.x; 
    droppedCandy.y = (Math.random() * 30) + 680; 
    this.stage.addChild(droppedCandy); 
  };
  
  deleteCorgi(corgi, interval) {
    this.stage.removeChild(corgi); 
    clearInterval(interval); 
  };
}

export default Corgi; 