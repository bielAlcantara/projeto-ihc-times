if(!localStorage.getItem('usuarioLogado')) {
    window.location.href = './index.html'
}

    const backModal = document.querySelector('.back-modal');
    const modal = document.querySelector('.modal');

    const divApagarConta = document.querySelector('.perfil-apagar-conta');
    divApagarConta.addEventListener('click', e => {
        
        
        backModal.classList.add('mostrar');
        modal.classList.add('mostrar-flex');
        modal.classList.add('flex-column');
        modal.classList.add('flex-column-center');
    });

    const btnNao = document.querySelector('.nao');
    btnNao.addEventListener('click', e => {
        backModal.classList.remove('mostrar');
        modal.classList.remove('mostrar-flex');
    });

    const btnSim = document.querySelector('.sim');
    btnSim.addEventListener('click', e => {

        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

        const usuariosFiltrados = usuarios.filter(usuario => usuario.email != usuarioLogado.email);

        localStorage.removeItem('usuarioLogado');

        localStorage.setItem('usuarios', JSON.stringify(usuariosFiltrados));

        modal.classList.remove('mostrar-flex');

        const msgRetornoApagarUsuario = document.querySelector('.msg-usuario-apagado');

        msgRetornoApagarUsuario.classList.add('top-0');

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 2000);
    });

fetch('../times.json').then(times => times.json()).then(times => {

    const divTimesFavoritados = document.querySelector('.times-favoritados');
    const timesFavoritados = JSON.parse(localStorage.getItem('usuarioLogado')).timesFavoritados;

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const divPerfilNome = document.querySelector('.perfil-nome');
    const divPerfilEmail = document.querySelector('.perfil-email');
    
    const indexArroba = usuarioLogado.email.indexOf('@'); 

    let emailEscondido;

    if(usuarioLogado.email.substring(0, indexArroba).length < 4) {

        emailEscondido = usuarioLogado.email.substring(0, indexArroba).split('').reduce((total, letra) => total + '*', '') + usuarioLogado.email.substring(indexArroba);
    } else {
        const primeiraParteEmail = usuarioLogado.email.substring(3, indexArroba);
        const letrasEscondidas = primeiraParteEmail.split('').reduce((total, letra) => total + '*', '');
        const segundaParteEmail = usuarioLogado.email.substring(indexArroba);
        const primeirasLetrasEmail = usuarioLogado.email.substring(0, 3);
        emailEscondido = primeirasLetrasEmail +  letrasEscondidas + segundaParteEmail;
    }

    divPerfilNome.append(usuarioLogado.nome);
    divPerfilEmail.append(emailEscondido);

    if(timesFavoritados) times = times.filter(t => timesFavoritados.includes(t.name));

    divTimesFavoritados.innerHTML = '';

    if(!timesFavoritados || !times.length) {

        divTimesFavoritados.append('N??o h?? times favoritados');

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

            imgLogo.addEventListener('click', e => {
                window.location.href = `../elenco.html?time=${time.name}`;
            });

            divNameItem.append(time.name)

            divLogoItem.appendChild(imgLogo);

            section.appendChild(divNameItem);
            section.appendChild(divLogoItem);

            divTimesFavoritados.appendChild(section);
        });
    }

});