 document.addEventListener("DOMContentLoaded", function () {
  const subtitleEl = document.querySelector(".banner__subtitle");
  const timerEl = document.querySelector(".timer");

  let time = 25; 

  function getRandomMultiplier() {
    return (Math.random() * 9 + 1).toFixed(2) + "x";
  }

  function startCountdown() {
    const startTime = Date.now();

    function updateTimer() {
      const elapsed = (Date.now() - startTime) / 1000;
      const remaining = Math.max(0, 25 - elapsed);

      timerEl.textContent = remaining.toFixed(1);

      if (remaining > 0) {
        requestAnimationFrame(updateTimer);
      } else {
        subtitleEl.textContent = getRandomMultiplier(); 
        time = 25; 
        startCountdown(); 
      }
    }

    updateTimer();
  }

  startCountdown();
});



