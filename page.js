document.addEventListener("DOMContentLoaded", () => {
  const hearts = ["💖", "💘", "💕", "❤️"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }, 800);
});
document.addEventListener("DOMContentLoaded", () => {
  // Floating hearts
  const hearts = ["💖", "💘", "💕", "❤️"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 1000);

  // Surprise popup
  const popups = [
    "You’re the best thing that’s ever happened to me 💕",
    "I love you more than you can imagine 😘",
    "Can’t wait to make more memories with you 💑"
  ];
  setTimeout(() => {
    alert(popups[Math.floor(Math.random() * popups.length)]);
  }, 4000);
});
function unwrapGift() {
  document.querySelector(".gift-container").style.display = "none";
  document.getElementById("surpriseContent").style.display = "block";
  launchConfetti();
}

function toggleMusic() {
  const audio = document.getElementById("bgMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// 🎊 Simple Confetti
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const pieces = Array.from({length: 150}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 5 + 5,
    speed: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function update() {
    pieces.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }

  loop();
}function bloomFlower() {
  const flower = document.getElementById("flower");
  const message = document.getElementById("loveMessage");

  // Bloom animation
  flower.style.opacity = "1";
  flower.style.transform = "scale(1) translateY(-150px)";

  // Show message after bloom
  setTimeout(() => {
    message.style.opacity = "1";
  }, 2000);
}

