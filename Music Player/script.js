let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#ctrlIcon");
let image = document.querySelector(".song-img");

song.onloadmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

ctrlIcon.addEventListener("click", () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    image.classList.remove("active");
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    image.classList.add("active");
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
});

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 2000);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  image.classList.add("active");
};
