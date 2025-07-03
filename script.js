// Cuenta regresiva para la fecha de lanzamiento (ejemplo: 1 de agosto de 2025)
const launchDate = new Date('2025-08-01T00:00:00');
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;
  if (diff <= 0) {
    countdown.textContent = '¡Ya estamos en línea!';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdown.textContent = `Faltan ${days} días, ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
