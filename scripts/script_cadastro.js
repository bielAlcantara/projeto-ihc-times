
    if(localStorage.getItem('usuarioLogado')) {
        window.location.href = '../index.html'
    }

    const txtNome = document.querySelector('.nome > input');
    const txtEmail = document.querySelector('.email > input');
    const txtPassword = document.querySelector('.password > input');

    txtNome.focus();

    const buttonForm = document.querySelector('button');
    if(buttonForm) {
        buttonForm.addEventListener('click', e => {
            e.preventDefault();

            const usuario = {
                nome: txtNome.value,
                email: txtEmail.value,
                senha: txtPassword.value
            };

            let usuarios;
            let jaExisteEmail = false;

            if(localStorage.getItem('usuarios')) {
                const getUsuarios = JSON.parse(localStorage.getItem('usuarios'));
                jaExisteEmail = getUsuarios.some(u => u.email == usuario.email);

                (jaExisteEmail) ? 
                    alert('o email informado não está disponível') : 
                    usuarios = [...getUsuarios, usuario];

            } else {
                usuarios = [usuario];
            }

            if(!jaExisteEmail) { 
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                window.location.href = './index.html';
            }

        });
    }

    const linkEntrar = document.querySelector('.entrar');
    if(linkEntrar) {
        linkEntrar.addEventListener('click', e => {
            window.location.href = './login.html';
        });
    }