/* MÚSICA — play / pause */
const music = document.getElementById('music');
let isPlaying = false;

function playMusic() {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
  } else {
    music.pause();
    isPlaying = false;
  }
}

/* PAUSAR MÚSICA E OUTROS VÍDEOS QUANDO UM VÍDEO TOCAR */
const videos = document.querySelectorAll('video');

videos.forEach((video) => {
  video.addEventListener('play', () => {
    // pausa música
    if (!music.paused) {
      music.pause();
      isPlaying = false;
    }

    // pausa outros vídeos
    videos.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

/* Girassóis */
function createSunflower() {
  const flower = document.createElement('div');
  flower.classList.add('sunflower');
  flower.innerText = '🌻';
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = 6 + Math.random() * 6 + 's';
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 12000);
}
setInterval(createSunflower, 500);

/* Contagem para Ano Novo */
const targetDate = new Date(new Date().getFullYear() + 1, 0, 1);

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  document.getElementById('days').innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById('hours').innerText =
    Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById('minutes').innerText =
    Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById('seconds').innerText =
    Math.floor((diff / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();
