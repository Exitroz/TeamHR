
function updateCountdown() {
    const weddingDate = new Date("2025-06-28T11:00:00");
    const now = new Date();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const navLinks = document.querySelector("nav ul");

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
