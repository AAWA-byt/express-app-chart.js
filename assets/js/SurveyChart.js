const ctx = document.getElementById('survey');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'],     // bar names/labels
        datasets: [{
            label: 'votes in %',
            data: [28.27, 18.03, 8.86, 7.51, 7.32],     // bar data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'The 5 most popular programming languages worldwide',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            }
        }
});