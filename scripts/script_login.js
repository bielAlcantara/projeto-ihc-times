
    if(localStorage.getItem('usuarioLogado')) {
        window.location.href = './index.html'
    }

    const txtEmail = document.querySelector('.email > input');
    const txtPassword = document.querySelector('.password > input');

    txtEmail.focus();

    const buttonForm = document.querySelector('button');
    if(buttonForm) {
        buttonForm.addEventListener('click', e => {
            e.preventDefault();

            const usuario = {
                email: txtEmail.value,
                senha: txtPassword.value
            };

            let usuarioExiste = false;

            if(localStorage.getItem('usuarios')) {
                const getUsuarios = JSON.parse(localStorage.getItem('usuarios'));
                usuarioExiste = getUsuarios.find(u => u.email == usuario.email && u.senha == usuario.senha);
                
                if(usuarioExiste) {
                    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioExiste));
                    window.location.href = './index.html'
                }

            }

            if(!usuarioExiste) {
                alert('O usuário não foi encontrado');
            }

        });
    }

    const linkCadastreSe = document.querySelector('.cadastre-se');
    if(linkCadastreSe) {
        linkCadastreSe.addEventListener('click', e => {
            window.location.href = './cadastro.html';
        });
    }