const montaTimes = (times) => {

    times.sort((t1, t2) => {
        if (Number.parseInt(t1.stars) == Number.parseInt(t2.stars)) {
            return (t1.name > t2.name ? 1 : -1);
        }
        return (Number.parseInt(t1.stars) < Number.parseInt((t2.stars))) ? 1 : -1
    });

    const divMainContainer = document.querySelector('.main-container');

    let i = 1;
    times.forEach(time => {

        const section = document.createElement('section');
        const divNameItem = document.createElement('div');
        const divLogoItem = document.createElement('div');
        const divEstrelasItem = document.createElement('div');
        const imgEstrela = document.createElement('img');
        const pNumEstrelas = document.createElement('p');
        const imgLogo = document.createElement('img');

        divNameItem.classList.add('name-item');    
        divLogoItem.classList.add('logo-item');
        divEstrelasItem.classList.add('star-item');
        imgEstrela.classList.add('star-img')

        imgEstrela.src = '../images/00-star.png';
        imgEstrela.alt = 'estrela';

        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

        const timesFavoritados = usuarioLogado.timesFavoritados;

        let achouTime = false;

        if(timesFavoritados) achouTime = timesFavoritados.some(t => t == time.name);

        if(achouTime) {
            imgEstrela.classList.add('img-star-hover');
        }

        imgLogo.addEventListener('mouseover', e => {
            divNameItem.classList.add('mouse-hover');
        });

        imgLogo.addEventListener('mouseout', e => {
            divNameItem.classList.remove('mouse-hover');
        });

        imgEstrela.addEventListener('mouseover', e => {
            imgEstrela.classList.add('img-star-hover');
        });

        imgEstrela.addEventListener('mouseout', e => {
            const timesFavoritados = JSON.parse(localStorage.getItem('usuarioLogado')).timesFavoritados;

            let achouTime = false;
            if(timesFavoritados) achouTime = timesFavoritados.some(t => t == time.name);

            if(!achouTime) imgEstrela.classList.remove('img-star-hover');
        });

        imgEstrela.addEventListener('click', e => {

            if(JSON.parse(localStorage.getItem('usuarioLogado')).timesFavoritados) {
                const timesFavoritados = JSON.parse(localStorage.getItem('usuarioLogado')).timesFavoritados;

                const marcouTime = timesFavoritados.some(t => t == time.name);

                if(marcouTime) {
                    const timesFavoritadosFiltrados = timesFavoritados.filter(t => t != time.name);
                    imgEstrela.classList.remove('img-star-hover');

                    usuarioLogado.timesFavoritados = timesFavoritadosFiltrados;

                    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
                    time.stars = (Number.parseInt(time.stars) - 1).toString();
                    pNumEstrelas.innerText = time.stars;
                } else {
                    imgEstrela.classList.add('img-star-hover');

                    usuarioLogado.timesFavoritados = [...timesFavoritados, time.name];

                    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
                    time.stars = (Number.parseInt(time.stars) + 1).toString();
                    pNumEstrelas.innerText = time.stars;
                }

            } else {
                imgEstrela.classList.add('img-star-hover');

                usuarioLogado.timesFavoritados = [time.name];
                
                time.stars = (Number.parseInt(time.stars) + 1).toString();
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));                
            }

            divMainContainer.innerHTML = '';

            localStorage.setItem('times', JSON.stringify(times));

            montaTimes(times);
        });

        divNameItem.append(`${i}º - ${time.name}`);
        imgLogo.src = time.logo;
        imgLogo.alt = time.alt;

        imgLogo.addEventListener('click', e => {
            window.location.href = `../elenco.html?time=${time.name}`;
        });
        
        pNumEstrelas.append(time.stars);

        divLogoItem.appendChild(imgLogo);
        divEstrelasItem.appendChild(imgEstrela);
        divEstrelasItem.appendChild(pNumEstrelas);

        section.appendChild(divNameItem);
        section.appendChild(divLogoItem);
        section.appendChild(divEstrelasItem);

        divMainContainer.appendChild(section);
        i++; 
    });
}

const montaTimesNaoLogado = (times) => {
    times.sort((t1, t2) => {
        if (Number.parseInt(t1.stars) == Number.parseInt(t2.stars)) {
            return (t1.name > t2.name ? 1 : -1);
        }
        return (Number.parseInt(t1.stars) < Number.parseInt((t2.stars))) ? 1 : -1
    });

    const divMainContainer = document.querySelector('.main-container');

    let i = 1;
    times.forEach(time => {

        const section = document.createElement('section');
        const divNameItem = document.createElement('div');
        const divLogoItem = document.createElement('div');
        const divEstrelasItem = document.createElement('div');
        const imgEstrela = document.createElement('img');
        const pNumEstrelas = document.createElement('p');
        const imgLogo = document.createElement('img');

        divNameItem.classList.add('name-item');    
        divLogoItem.classList.add('logo-item');
        divEstrelasItem.classList.add('star-item');
        imgEstrela.classList.add('star-img')

        imgEstrela.src = '../images/00-star.png';
        imgEstrela.alt = 'estrela';

        imgEstrela.classList.add('img-star-hover-not-cursor');

        imgLogo.addEventListener('mouseover', e => {
            divNameItem.classList.add('mouse-hover');
        });

        imgLogo.addEventListener('mouseout', e => {
            divNameItem.classList.remove('mouse-hover');
        });

        imgLogo.addEventListener('click', e => {
            window.location.href = `../elenco.html?time=${time.name}`;
        });

        divNameItem.append(`${i}º - ${time.name}`);
        imgLogo.src = time.logo;
        imgLogo.alt = time.alt;
        pNumEstrelas.append(time.stars);

        divLogoItem.appendChild(imgLogo);
        divEstrelasItem.appendChild(imgEstrela);
        divEstrelasItem.appendChild(pNumEstrelas);

        section.appendChild(divNameItem);
        section.appendChild(divLogoItem);
        section.appendChild(divEstrelasItem);

        divMainContainer.appendChild(section);
        i++; 
    });
}

if(!localStorage.getItem('times')) {

    fetch('../times.json').then(times => times.json()).then(times => {

        localStorage.setItem('times', JSON.stringify(times));
    
        (localStorage.getItem('usuarioLogado')) ? montaTimes(times) : montaTimesNaoLogado(times);
    
    });
} else {
    (localStorage.getItem('usuarioLogado')) ? montaTimes(JSON.parse(localStorage.getItem('times'))) : montaTimesNaoLogado(JSON.parse(localStorage.getItem('times')));
}