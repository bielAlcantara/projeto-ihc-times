fetch('../times.json').then(times => times.json()).then(times => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nomeTime = urlParams.get('time');
    const objTime = times.find(time => time.name == nomeTime);

    const tituloTime = document.querySelector('.nome-time-titulo');

    tituloTime.innerHTML = objTime.name;
});