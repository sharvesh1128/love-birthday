// Floating hearts generator
const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 5 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}, 500);

const music = document.getElementById("bgMusic");

window.addEventListener("click", () => {
  music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.8) {
      music.volume += 0.02;
    } else {
      clearInterval(fade);
    }
  }, 100);
}, { once: true });


const yes = document.getElementById("yesBtn");
const no = document.getElementById("noBtn");
const response = document.getElementById("response");

yes.onclick = () => {
  response.innerHTML = "YAYYYY 💖 I knew it 😭✨";
  response.style.fontSize = "1.5rem";
  spawnHearts(30);
};

no.onmouseover = () => {
  no.style.position = "absolute";
  no.style.left = Math.random() * 80 + "vw";
  no.style.top = Math.random() * 80 + "vh";
};

setTimeout(() => {
  document.getElementById("cinematic").classList.remove("hidden");
}, 25000);
