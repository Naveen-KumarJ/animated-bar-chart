const ctx = document.querySelector('canvas.chart').getContext('2d');

const chartObj = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Monthly Sale',
        data: [65, 60, 80, 84, 90, 40],
        borderWidth: 1
      }]
    },
    options: {
        plugins: { title: { display: true, text: 'Monthly Sales Data' } },
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

// Animate dataset values using Anime.js
anime({
    targets: chartObj.data.datasets[0].data,
    easing: 'easeOutElastic(1, .8)',
    duration: 2000,
    update: function() {
        chartObj.update();
    }
});
