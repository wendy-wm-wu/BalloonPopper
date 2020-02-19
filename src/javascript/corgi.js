import { yikes, beCareful } from './text';

const corgiImages = {
  0: "src/images/corgi.png",
  1: "src/images/corgi1.png",
  2: "src/images/corgi2.png",
  3: "src/images/bread.png",
  4: "src/images/bread1.png",
}

const candyImages = {
  0: "src/images/candy.png",
  1: "src/images/candy2.png",
  2: "src/images/candy3.png",
  3: "src/images/candy4.png",
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
    this.music = this.music.bind(this);
  }

  generateCorgi(interval) {
    const randomKey = Math.floor(Math.random() * 5);  
    const corgi = new createjs.Bitmap(corgiImages[randomKey]);

    if (randomKey === 3 || randomKey === 4) {
      corgi.type = "bomb";
      this.stats.increaseTotalBread();
    } else {
      corgi.type = "corgi";
      this.stats.increaseTotalCorgis(); 
    }

    const tag = new createjs.Shape(); 
    tag.graphics.beginFill('#000').drawRect(0, 50, 90, 70); 
    corgi.hitArea = tag; 

    corgi.x = Math.round(Math.random() * this.canvas.width);
    corgi.y = 800; 
    corgi.rotation = Math.random() * 360; 
    this.stage.addChild(this.corgi); 
    
    this.addListener(corgi, interval);
    return corgi; 
  };

  addListener(corgi, interval) {
    corgi.addEventListener('mouseover', () => {
      const type = corgi.type; 
      const sound = this.music(type); 
      sound.currentTime = 0; 
      sound.play(); 
      
      this.corgiReaction(corgi, type); 
      this.deleteCorgi(corgi, interval);
      this.stage.update();
    });
  };

  music(type) {
    const corgiSound = new Audio("src/sounds/dog_woof.mp3"); 
    const breadSound = new Audio("src/sounds/funny_slip.mp3"); 
    return type === "corgi" ? corgiSound : breadSound; 
  }
  
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
    const happyCorgi = new createjs.Bitmap("src/images/happy_corgi.png");
    happyCorgi.x = corgi.x;
    happyCorgi.y = corgi.y; 
    this.stage.addChild(happyCorgi);
    setTimeout(() => this.stage.removeChild(happyCorgi), 750); 
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