fetch('../times.json').then(times => times.json()).then(times => {

    const divMainContainer = document.querySelector('.main-container');

    times.forEach(time => {

        const section = document.createElement('section');
        const divNameItem = document.createElement('div');
        const divLogoItem = document.createElement('div');
        const imgLogo = document.createElement('img');

        divNameItem.classList.add('name-item');    
        divLogoItem.classList.add('logo-item');

        divNameItem.append(time.name);
        imgLogo.src = time.logo

        imgLogo.addEventListener('mouseover', e => {
            divNameItem.classList.add('mouse-hover');
        });

        imgLogo.addEventListener('mouseout', e => {
            divNameItem.classList.remove('mouse-hover');
        });

        divLogoItem.appendChild(imgLogo);

        section.appendChild(divNameItem);
        section.appendChild(divLogoItem);

        divMainContainer.appendChild(section)
        
    });

});