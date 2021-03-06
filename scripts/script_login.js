let emailValido = false;
let senhaValida = false;

    if(localStorage.getItem('usuarioLogado')) {
        window.location.href = './index.html'
    }

    const lblEmail = document.querySelector('.lbl-email');
    const lblPassword = document.querySelector('.lbl-password');
    const txtEmail = document.querySelector('.email > input');
    const txtPassword = document.querySelector('.password > input');
    const errosInputs = document.querySelectorAll('.erro-input');
    const button = document.querySelector('button');
    
    let validosEmail = 0;
    let validosSenha = 0;

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
        lblEmail.classList.remove('color-blue');
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!txtEmail.value.trim()) {
            errosInputs[0].innerHTML = 'preencha o e-mail';
            if(errosInputs[0].classList.contains('esconder')) errosInputs[0].classList.remove('esconder');
            if(txtEmail.classList.contains('border-bottom-white')) txtEmail.classList.remove('border-bottom-white');
            errosInputs[0].classList.add('mostrar');
            txtEmail.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            emailValido = false;
            return;
        } 

        if(!regex.test(txtEmail.value.trim())) {
            errosInputs[0].innerHTML = 'e-mail inv??lido';
            if(errosInputs[0].classList.contains('esconder')) errosInputs[0].classList.remove('esconder');
            if(txtEmail.classList.contains('border-bottom-white')) txtEmail.classList.remove('border-bottom-white');
            errosInputs[0].classList.add('mostrar');
            txtEmail.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            emailValido = false;
            return;
        } 
        
        txtEmail.classList.add('border-bottom-white');
        errosInputs[0].classList.add('esconder');
        emailValido = true;
        validosEmail = 1;

        if(validosEmail + validosSenha == 2) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        }
    });
    
    txtEmail.addEventListener('focus', e => {
        lblEmail.classList.add('color-blue');
        txtEmail.classList.add('border-bottom-white');
        errosInputs[0].classList.add('esconder');
    })

    txtEmail.addEventListener('keyup', e => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(regex.test(txtEmail.value.trim()) && senhaValida) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        } else {
            button.disabled = true;
            button.classList.add('button-disabled')
        }
    });

    txtPassword.addEventListener('blur', e => {
        lblPassword.classList.remove('color-blue');
        if(!txtPassword.value.trim()) {
            errosInputs[1].innerHTML = 'preencha a senha';
            if(errosInputs[1].classList.contains('esconder')) errosInputs[1].classList.remove('esconder');
            if(txtPassword.classList.contains('border-bottom-white')) txtPassword.classList.remove('border-bottom-white');
            errosInputs[1].classList.add('mostrar');
            txtPassword.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            return;
        }

        txtPassword.classList.add('border-bottom-white');
        errosInputs[1].classList.add('esconder');
        senhaValida = true;
        validosSenha = 1;

        if(validosEmail + validosSenha == 2) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        } 
    });

    txtPassword.addEventListener('focus', e => {
        lblPassword.classList.add('color-blue');
        txtPassword.classList.add('border-bottom-white');
        errosInputs[1].classList.add('esconder');
    })

    txtPassword.addEventListener('keyup', e => {
        if(txtPassword.value.trim() && emailValido) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        } else {
            button.disabled = true;
            button.classList.add('button-disabled')
        }
    })

    const buttonForm = document.querySelector('button');
    if(buttonForm) {
        buttonForm.addEventListener('click', e => {
            e.preventDefault();

            const usuario = {
                email: txtEmail.value.trim(),
                senha: txtPassword.value.trim()
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
                const divMsgUsuarioNaoEncontrado = document.querySelector('.msg-usuario-nao-encontrado');
                divMsgUsuarioNaoEncontrado.classList.add('top-0');

                setTimeout(() =>{
                    divMsgUsuarioNaoEncontrado.classList.remove('top-0');
                }, 2500);
            }

        });
    }

    const linkCadastreSe = document.querySelector('.cadastre-se');
    if(linkCadastreSe) {
        linkCadastreSe.addEventListener('click', e => {
            window.location.href = './cadastro.html';
        });
    }