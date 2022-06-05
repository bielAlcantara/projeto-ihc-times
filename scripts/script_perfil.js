if(!localStorage.getItem('usuarioLogado')) {
    window.location.href = './index.html'
}

fetch('../times.json').then(times => times.json()).then(times => {

    const divTimesFavoritados = document.querySelector('.times-favoritados');
    const timesFavoritados = JSON.parse(localStorage.getItem('timesFavoritados'));

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const divPerfilNome = document.querySelector('.perfil-nome');
    const divPerfilEmail = document.querySelector('.perfil-email');
    
    const indexArroba = usuarioLogado.email.indexOf('@'); 
    const primeiraParteEmail = usuarioLogado.email.substring(3, indexArroba + 1);
    const letrasEscondidas = primeiraParteEmail.split('').reduce((total, letra) => total + '*', '');
    const segundaParteEmail = usuarioLogado.email.substring(indexArroba);
    const primeirasLetrasEmail = usuarioLogado.email.substring(0, 3);
    const emailEscondido = primeirasLetrasEmail +  letrasEscondidas + segundaParteEmail;

    divPerfilNome.append(usuarioLogado.nome);
    divPerfilEmail.append(emailEscondido);

    console.log(timesFavoritados)

    times = times.filter(t => timesFavoritados.includes(t.name));

    divTimesFavoritados.innerHTML = '';

    if(!times.length) {

        divTimesFavoritados.append('Não há times favoritados');

    } else {

        times.forEach(time => {
            const section = document.createElement('section');
            const divNameItem = document.createElement('div');
            const divLogoItem = document.createElement('div');
            const imgLogo = document.createElement('img');

            imgLogo.addEventListener('mouseover', e => {
                divNameItem.classList.add('mouse-hover');
            });
    
            imgLogo.addEventListener('mouseout', e => {
                divNameItem.classList.remove('mouse-hover');
            });

            divNameItem.classList.add('name-item');    
            divLogoItem.classList.add('logo-item');

            imgLogo.src = time.logo;
            imgLogo.alt = '';

            divNameItem.append(time.name)

            divLogoItem.appendChild(imgLogo);

            section.appendChild(divNameItem);
            section.appendChild(divLogoItem);

            console.log(section)

            divTimesFavoritados.appendChild(section);
        });
    }

});