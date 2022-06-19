fetch('../times.json').then(times => times.json()).then(times => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nomeTime = urlParams.get('time');
    const objTime = times.find(time => time.name == nomeTime);

    const tituloTime = document.querySelector('.nome-time-titulo');
    const logoTime = document.querySelector('.logo-time > img');
    const imgTreinador = document.querySelector('.treinador-img');
    const nomeTreinador = document.querySelector('.nome-treinador');

    logoTime.src = objTime.logo;

    nomeTreinador.innerHTML = objTime.nome_treinador;

    imgTreinador.src = objTime.treinador;

    tituloTime.innerHTML = objTime.name;

    const divGoleiro = document.querySelector('.goleiro');
    const divLatEsquerdo = document.querySelector('.lateral-esquerdo');
    const divZagEsquerdo = document.querySelector('.zagueiro-esquerdo');
    const divZagDireito = document.querySelector('.zagueiro-direito');
    const divLatDireito = document.querySelector('.lateral-direito');
    const divMeiaEsquerda = document.querySelector('.meia-esquerda');
    const divMeiaCentral = document.querySelector('.meia-central');
    const divMeiaDireita = document.querySelector('.meia-direita');
    const divPontaEsquerda = document.querySelector('.ponta-esquerda');
    const divCentroAvante = document.querySelector('.centroavante');
    const divPontaDireita = document.querySelector('.ponta-direita');

    divGoleiro.innerHTML = objTime.squad.goleiro;
    divLatEsquerdo.innerHTML = objTime.squad.latEsquerdo;
    divZagEsquerdo.innerHTML = objTime.squad.zagEsquerdo;
    divZagDireito.innerHTML = objTime.squad.zagDireito;
    divLatDireito.innerHTML = objTime.squad.latDireito;
    divMeiaEsquerda.innerHTML = objTime.squad.meiaEsquerda;
    divMeiaCentral.innerHTML = objTime.squad.meiaCentral;
    divMeiaDireita.innerHTML = objTime.squad.meiaDireita;
    divPontaEsquerda.innerHTML = objTime.squad.pontaEsquerda;
    divCentroAvante.innerHTML = objTime.squad.centroavante;
    divPontaDireita.innerHTML = objTime.squad.pontaDireita;
});