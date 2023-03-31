(() => {
  let xylophone = document.querySelector(".contenedor");

  const soundKey = {
    C: new Audio(`sound/C.mp3`),
    D: new Audio(`sound/D.mp3`),
    E: new Audio(`sound/E.mp3`),
    F: new Audio(`sound/F.mp3`),
    G: new Audio(`sound/G.mp3`),
    A: new Audio(`sound/A.mp3`),
    B: new Audio(`sound/B.mp3`),
    C2: new Audio(`sound/C2.mp3`),
  };
  const tocar = (e) => {
    let sound = soundKey[e.target.id];
    sound.pause();
    sound.currentTime = 0;
    sound.play();
    e.target.classList.add("sombra");
    setTimeout(() => {
      e.target.classList.remove("sombra");
    }, 250);
  };

  const metallophone = (evento) => {
    xylophone.addEventListener(evento, (e) => {
      if (e.target.classList.contains("note")) {
        tocar(e);
      }
    });
  };
  /* preguntamos si existe el evento "ontouchstart" */
  "ontouchstart" in window ? metallophone("touchstart") : metallophone("click");
})();
