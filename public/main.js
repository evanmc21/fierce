const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    const option = document.querySelector('input[name=star]:checked').value;
    const data = { star: option }
    // data that will be sent with post request

    fetch('http://localhost:3000/poll', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .catch(err => console.log(err))

  e.preventDefault();
});

let dataPoints = [
    { label: 'Beyonce', y: 0 },
    { label: 'Mariah', y: 0 },
    { label: 'Rihanna', y: 0 },
    { label: 'Denu', y: 0 },
];

const chartContainer = document.querySelector('#chart-container');

if(chartContainer) {
    const chart = new CanvasJS.Chart("chart-container", {
        animationEnabled: true,
        theme: 'light2',
        title: {
            text: 'Pop Star Results'
        },
        data: [
            {
                type: 'column',
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();
}