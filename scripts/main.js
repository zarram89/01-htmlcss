document.addEventListener('DOMContentLoaded', () => {
  const jsCircles = document.querySelectorAll('.js-circle');

  jsCircles.forEach(circle => {
    const percent = parseInt(circle.dataset.percent);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    circle.innerHTML = `
                <circle cx="50" cy="50" r="${radius}"
                         stroke="#E0E0E0"
                         stroke-width="20" fill="none"/>
                <circle cx="50" cy="50" r="${radius}"
                         stroke="#4CAF50"
                         stroke-width="20"
                         fill="none"
                         stroke-dasharray="${circumference}"
                         stroke-dashoffset="${offset}"
                         class="js-progress"/>
                <text x="50" y="50"
                      text-anchor="middle"
                      dy=".3em"
                      font-family="PantonExtraBold"
                      font-size="20"
                      fill="#333"
                      transform="rotate(90 50 50)"
                      >
                    ${percent}%
                </text>
            `;

    // Обработчик наведения
    circle.closest('.progress-circle').addEventListener('mouseenter', function () {
      const progress = this.querySelector('.js-progress');
      progress.style.stroke = '#2E7D32';
      progress.style.filter = 'drop-shadow(0 0 5px rgba(46, 125, 50, 0.5))';

    });

    circle.closest('.progress-circle').addEventListener('mouseleave', function () {
      const progress = this.querySelector('.js-progress');
      progress.style.stroke = '#4CAF50';
      progress.style.filter = 'none';
    });
  });
});