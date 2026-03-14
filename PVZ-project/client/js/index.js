// Ждем загрузки DOM
        document.addEventListener('DOMContentLoaded', function() {
            // Данные для графика
            const dates = [
                '01.01', '02.01', '03.01', '04.01', '05.01',
                '06.01', '07.01', '08.01', '09.01', '10.01',
                '11.01', '12.01', '13.01', '14.01'
            ];

            const loadData = [10, 38, 45, 58, 100, 55, 38, 52, 100, 47, 41, 35, 30, 28];

            const ctx = document.getElementById('loadChart').getContext('2d');
            
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Загрузка ПВЗ (%)',
                        data: loadData,
                        borderColor: '#cb3cff',
                        backgroundColor: '#3f00d244',
                        borderWidth: 3,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#2563eb',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: '#e2e8f0'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false

                            }
                        }
                    }
                }
            });
        });