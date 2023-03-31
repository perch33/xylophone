(() => {
  let xylophone = document.querySelectorAll(".note");

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

  xylophone.forEach((notes) =>
    notes.addEventListener("click", () => {
      const tocar = (sounds) => {
        sounds.pause();
        sounds.currentTime = 0;
        sounds.play();
      };
      tocar(soundKey[notes.id]);
      notes.classList.add("sombra");
      setTimeout(() => {
        notes.classList.remove("sombra");
      }, 300);
    })
  );
})();
