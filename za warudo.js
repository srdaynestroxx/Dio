document.getElementById("zaWarudoButton").onclick = () => {
  // Muestra el aura amarilla
  const aura = document.getElementById("aura");
  aura.style.display = "block";

  // Reproduce el sonido
  const audio = document.getElementById("zaWarudoAudio");
  audio.currentTime = 0;
  audio.play();

  // Detiene las animaciones de las imágenes (ejemplo: pausarlas)
  document.querySelectorAll("img").forEach(el => {
    el.classList.add("paused"); // Añade la clase paused (a menos que no la necesites)
  });

  // Oculta el aura después de unos segundos
  setTimeout(() => {
    aura.style.display = "none";
  }, 3000); // Cambia el número de milisegundos si deseas que dure más o menos
};
