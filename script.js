 function updateCountdowns() {
      const countdowns = document.querySelectorAll('.countdown');
      countdowns.forEach(el => {
        const dateStr = el.getAttribute('data-date');
        const eventDate = new Date(dateStr);
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
          el.textContent = '¡El evento ya ha comenzado o ha finalizado!';
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        el.textContent = `Faltan ${days}d ${hours}h ${minutes}m ${seconds}s`;
      });
    }

    setInterval(updateCountdowns, 1000);
    updateCountdowns();