const registerListeners = (pause) => {
  const modal = document.getElementById('modal');
  const instructions = document.getElementById('instructions'); 
  const instrBtn = document.getElementById('instrBtn');
  const close = document.getElementById('close');

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; 

      if (pause.paused) {
        pause.unpauseGame();
        playBtn.style.display = "none"; 
      }
    }
  }

  // instrBtn.onclick = () => {
  //   modal.style.display = "flex";
  //   instructions.style.display = "block";
    
  //   if (pause.game.started) {
  //     pause.pauseGame(); 
  //   }
  // }

  // close.onclick = () => {
  //   if (!pause.paused) {
  //     modal.style.display = "none"; 
  //   }
  //   if (pause.game.started) {
  //     pause.unpauseGame(); 
  //   }
  //   instructions.style.display = "none";  
  // }

}

export default registerListeners; 