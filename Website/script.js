const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach(item => observer.observe(item));

const heartSymbols = ["♥", "♡", "💗", "💕", "✦"];
function makeFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "heart-float";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${14 + Math.random() * 20}px`;
  heart.style.color = ["#ff5c9a", "#ff8ab7", "#e7a7cb", "#f3b94f"][Math.floor(Math.random() * 4)];
  heart.style.animationDuration = `${4 + Math.random() * 3}s`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7500);
}
setInterval(makeFloatingHeart, 850);

function celebrate() {
  const layer = document.getElementById("confetti-layer");
  const colors = ["#ff5c9a", "#ffd166", "#b8e0d2", "#cdb4db", "#ff8fab", "#ffffff"];
  for (let i = 0; i < 100; i++) {
    const bit = document.createElement("span");
    bit.className = "confetti";
    bit.style.left = `${Math.random() * 100}vw`;
    bit.style.background = colors[Math.floor(Math.random() * colors.length)];
    bit.style.animationDelay = `${Math.random() * 1.2}s`;
    bit.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    bit.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(bit);
    setTimeout(() => bit.remove(), 5500);
  }
}
window.addEventListener("load", () => setTimeout(celebrate, 500));

document.getElementById("yes-button").addEventListener("click", () => {
  document.getElementById("answer").textContent = "Yayyy! In this life and every lifetime — it’s always you. 💍❤️ Ummah, my pondati!";
  celebrate();
});

// Keyboard and touch-friendly, native anchor navigation is retained throughout.
