(() => {
  let xylophone = document.querySelector(".contenedor");

  xylophone.addEventListener("click", (e) => {
    let sound = new Audio(`sound/${e.target.id}.mp3`);
    const tocar = (sounds) => {
      sounds.pause();
      sounds.currentTime = 0;
      sounds.play();
      e.target.classList.add("sombra");
      setTimeout(() => {
        e.target.classList.remove("sombra");
      }, 300);
    };
    if (e.target.classList.contains("note")) {
      tocar(sound);
    }
  });
})();
