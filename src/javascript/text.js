export const resize = (...texts) => {
  texts.forEach(text => {
    const width = text.getBounds().width;
    text.x = (900 - width) / 2; 
  });
};

export const restart = new createjs.Text("(Click anywhere to start)", "bold 25px Gloria Hallelujah", "#000000");
restart.y = 480; 

export const start = new createjs.Text("Welcome to Corgi Tag!", "bold 35px Gloria Hallelujah", "#000000");start.y = 270; 

export const corgiTagPercentage = new createjs.Text("Tag as many corgis as you can", "bold 35px Gloria Hallelujah", "#000000"); 
corgiTagPercentage.y = 350;

export const breadTagPercentage = new createjs.Text("but don't tag any bread!", "bold 35px Gloria Hallelujah", "#000000");
breadTagPercentage.y = 400;

export const yikes = new createjs.Text("YIKES!", "bold 90px Gloria Hallelujah", "#000000");
yikes.y = 270;

export const beCareful = new createjs.Text("Be careful!", "bold 40px Gloria Hallelujah", "#000000"); 

resize(yikes, beCareful); 

export const pause = new createjs.Bitmap("src/images/pause.png"); 
pause.x = 15;
pause.y = 675; 

export const play = new createjs.Bitmap("src/images/play.png");
play.x = 15;
play.y = 675; 

export const endGameMessage = (stage, game, score, stats, time) => {
  setTimeout(() => {
    start.text = `Game over! Your score was ${score.score}`;
    corgiTagPercentage.text = `Corgis Tagged: ${stats.corgiTagPercentage()}%`;
    breadTagPercentage.text = `Bread Avoided: ${100 - stats.breadTagPercentage()}%`;
    game.end();
    resize(start, corgiTagPercentage, breadTagPercentage); 
    stage.addChild(start, restart, pause, corgiTagPercentage, breadTagPercentage); 
  }, time);
}