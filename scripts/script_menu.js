window.onload = () => {

    const includeMenu = document.querySelector('nav');

    includeMenu.innerHTML = `
            <div class="nav-container">
                <div class="item-esquerda logo">
                    <a href="#"><img src="images/premier-league.svg" alt="premier-league"></a>
                </div>
                <div class="item-direita">
                    ${(!localStorage.getItem('usuarioLogado')) ? 
                    `<div class="menu-item item1">
                        <a href="#">Login</a>
                    </div>`: 
                    `<div class="menu-item item3">
                        <a href="#">Minha Conta</a>
                    </div>`}
                    <div class="menu-item item2">
                        <a href="#">Ranking</a>
                    </div>
                    ${(localStorage.getItem('usuarioLogado')) ? 
                    `<div class="menu-item item4">
                        <a href="#">Sair</a>
                    </div>`: 
                    ``}
                </div>
            </div>
    `;

    const menuItemLogin = document.querySelector('.item1');

    if(menuItemLogin) {
        menuItemLogin.addEventListener('click', e => {
            window.location.href = '../login.html';
        });
    }


    const menuItemRanking = document.querySelector('.item2');
    if(menuItemRanking) {
        menuItemRanking.addEventListener('click', e => {
            window.location.href = '../ranking.html';
        });
    }

    const menuItemMinhaConta = document.querySelector('.item3');
    if(menuItemMinhaConta) {
        menuItemMinhaConta.addEventListener('click', e => {
            window.location.href = '../ranking.html';
        });
    }

    const menuItemSair = document.querySelector('.item4');
    if(menuItemSair) {
        menuItemSair.addEventListener('click', e => {

            localStorage.removeItem('usuarioLogado')

            window.location.href = '../index.html';
        });
    }

    const menuItemLogo = document.querySelector('.logo');

    if(menuItemLogo) {
        menuItemLogo.addEventListener('click', e => {
            window.location.href = '../index.html';
        });
    }

}