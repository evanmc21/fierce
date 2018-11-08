const form = document.getElementById('vote-form');

form.addEventListener('submit', (e) => {
    const option =document.querySelector('input[name=star]:checked').value;
    const data = { star: option }
    // data that will be sent with post request

    fetch('http://localhost:3000/poll', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
});