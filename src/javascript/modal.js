const registerListeners = (pause) => {
  const modal = document.getElementById('modal');
  const playBtn = document.getElementById('playBtn');

  playBtn.onclick = () => {
    modal.style.display = "none";
    pause.unpauseGame(); 
  }

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; 

      if (pause.paused) {
        pause.unpauseGame();
        playBtn.style.display = "none"; 
      }
    }
  }
}

export default registerListeners; 