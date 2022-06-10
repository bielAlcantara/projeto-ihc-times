
    if(localStorage.getItem('usuarioLogado')) {
        window.location.href = './index.html'
    }

    const txtEmail = document.querySelector('.email > input');
    const txtPassword = document.querySelector('.password > input');
    const errosInputs = document.querySelectorAll('.erro-input');
    const button = document.querySelector('button');
    
    let validosEmail = 0;
    let validosSenha = 0;

    txtEmail.focus();

    button.addEventListener('mouseover', e => {
        if(!button.disabled) {
            button.classList.add('button-hover');
        } else {
            button.classList.add('button-disabled');
        }
    });

    button.addEventListener('mouseout', e => {
        if(!button.disabled) {
            button.classList.remove('button-hover');
        } 
    });

    button.addEventListener('focus', e => {
        if(!button.disabled) {
            button.classList.add('button-hover');
        } else {
            button.classList.add('button-disabled');
        }
    });

    button.addEventListener('blur', e => {
        if(!button.disabled) {
            button.classList.remove('button-hover');
        } 
    });

    txtEmail.addEventListener('blur', e => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        console.log(txtEmail.value == '')

        if(!txtEmail.value) {
            errosInputs[0].innerHTML = 'preencha o e-mail';
            if(errosInputs[0].classList.contains('esconder')) errosInputs[0].classList.remove('esconder');
            if(txtEmail.classList.contains('border-bottom-white')) txtEmail.classList.remove('border-bottom-white');
            errosInputs[0].classList.add('mostrar');
            txtEmail.classList.add('border-bottom-red');
            return;
        } 

        if(!regex.test(txtEmail.value)) {
            errosInputs[0].innerHTML = 'e-mail inválido';
            if(errosInputs[0].classList.contains('esconder')) errosInputs[0].classList.remove('esconder');
            if(txtEmail.classList.contains('border-bottom-white')) txtEmail.classList.remove('border-bottom-white');
            errosInputs[0].classList.add('mostrar');
            txtEmail.classList.add('border-bottom-red');
            return;
        } 
        
        txtEmail.classList.add('border-bottom-white');
        errosInputs[0].classList.add('esconder');
        validosEmail = 1;

        if(validosEmail + validosSenha == 2) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        }
    });

    txtPassword.addEventListener('blur', e => {
        if(!txtPassword.value) {
            errosInputs[1].innerHTML = 'preencha a senha';
            if(errosInputs[1].classList.contains('esconder')) errosInputs[1].classList.remove('esconder');
            if(txtPassword.classList.contains('border-bottom-white')) txtPassword.classList.remove('border-bottom-white');
            errosInputs[1].classList.add('mostrar');
            txtPassword.classList.add('border-bottom-red');
            return;
        }

        txtPassword.classList.add('border-bottom-white');
        errosInputs[1].classList.add('esconder');
        validosSenha = 1;

        if(validosEmail + validosSenha == 2) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        }
    });

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