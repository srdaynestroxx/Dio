document.getElementById("zaWarudoButton").onclick = () => {
  document.getElementById("aura").style.display = "block";

  const audio = document.getElementById("zaWarudoAudio");
  audio.currentTime = 0;
  audio.play();

  document.querySelectorAll("img").forEach(el => {
    el.classList.toggle("paused");
  });
};
