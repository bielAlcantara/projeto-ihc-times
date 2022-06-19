let nomeValido = false;
let emailValido = false;
let senhaValida = false;

    if(localStorage.getItem('usuarioLogado')) {
        window.location.href = './index.html'
    }

    const txtNome = document.querySelector('.nome > input');
    const txtEmail = document.querySelector('.email > input');
    const txtPassword = document.querySelector('.password > input');
    const errosInputs = document.querySelectorAll('.erro-input');
    const button = document.querySelector('button');
    
    let validosNome = 0;
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

    txtNome.addEventListener('blur', e => {
        const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

        if(!txtNome.value.trim()) {
            errosInputs[0].innerHTML = 'preencha o nome';
            if(errosInputs[0].classList.contains('esconder')) errosInputs[0].classList.remove('esconder');
            if(txtNome.classList.contains('border-bottom-white')) txtNome.classList.remove('border-bottom-white');
            errosInputs[0].classList.add('mostrar');
            txtNome.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            nomeValido = false;
            return;
        } 

        if(!regex.test(txtNome.value.trim())) {
            errosInputs[0].innerHTML = 'nome inválido';
            if(errosInputs[0].classList.contains('esconder')) errosInputs[0].classList.remove('esconder');
            if(txtNome.classList.contains('border-bottom-white')) txtNome.classList.remove('border-bottom-white');
            errosInputs[0].classList.add('mostrar');
            txtNome.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            nomeValido = false;
            return;
        } 
        
        txtNome.classList.add('border-bottom-white');
        errosInputs[0].classList.add('esconder');
        nomeValido = true;
        validosNome = 1;

        if(validosNome +  validosEmail + validosSenha == 3) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        }
    });
    
    txtNome.addEventListener('focus', e => {
        txtNome.classList.add('border-bottom-white');
        errosInputs[0].classList.add('esconder');
    })

    txtNome.addEventListener('keyup', e => {
        const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

        if(regex.test(txtNome.value.trim()) && emailValido && senhaValida) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        } else {
            button.disabled = true;
            button.classList.add('button-disabled')
        }
    });

    txtEmail.addEventListener('blur', e => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!txtEmail.value.trim()) {
            errosInputs[1].innerHTML = 'preencha o e-mail';
            if(errosInputs[1].classList.contains('esconder')) errosInputs[1].classList.remove('esconder');
            if(txtEmail.classList.contains('border-bottom-white')) txtEmail.classList.remove('border-bottom-white');
            errosInputs[1].classList.add('mostrar');
            txtEmail.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            emailValido = false;
            return;
        } 

        if(!regex.test(txtEmail.value.trim())) {
            errosInputs[1].innerHTML = 'e-mail inválido';
            if(errosInputs[1].classList.contains('esconder')) errosInputs[1].classList.remove('esconder');
            if(txtEmail.classList.contains('border-bottom-white')) txtEmail.classList.remove('border-bottom-white');
            errosInputs[1].classList.add('mostrar');
            txtEmail.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            emailValido = false;
            return;
        } 
        
        txtEmail.classList.add('border-bottom-white');
        errosInputs[1].classList.add('esconder');
        emailValido = true;
        validosEmail = 1;

        if(validosNome +  validosEmail + validosSenha == 3) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        }
    });
    
    txtEmail.addEventListener('focus', e => {
        txtEmail.classList.add('border-bottom-white');
        errosInputs[1].classList.add('esconder');
    })

    txtEmail.addEventListener('keyup', e => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(nomeValido && regex.test(txtEmail.value.trim()) && senhaValida) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        } else {
            button.disabled = true;
            button.classList.add('button-disabled')
        }
    });

    txtPassword.addEventListener('blur', e => {
        if(!txtPassword.value.trim()) {
            errosInputs[2].innerHTML = 'preencha a senha';
            if(errosInputs[2].classList.contains('esconder')) errosInputs[2].classList.remove('esconder');
            if(txtPassword.classList.contains('border-bottom-white')) txtPassword.classList.remove('border-bottom-white');
            errosInputs[2].classList.add('mostrar');
            txtPassword.classList.add('border-bottom-red');
            button.disabled = true;
            button.classList.add('button-disabled')
            return;
        }

        txtPassword.classList.add('border-bottom-white');
        errosInputs[2].classList.add('esconder');
        senhaValida = true;
        validosSenha = 1;

        if(validosNome +  validosEmail + validosSenha == 3) {
            button.disabled = false;
            button.classList.remove('button-disabled')
        }
    });

    txtPassword.addEventListener('focus', e => {
        txtPassword.classList.add('border-bottom-white');
        errosInputs[2].classList.add('esconder');
    })

    txtPassword.addEventListener('keyup', e => {
        if(nomeValido && txtPassword.value.trim() && emailValido) {
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
                nome: txtNome.value.trim(),
                email: txtEmail.value.trim(),
                senha: txtPassword.value.trim(),
                timesFavoritados: []
            };

            let usuarios;
            let jaExisteEmail = false;

            if(localStorage.getItem('usuarios')) {
                const getUsuarios = JSON.parse(localStorage.getItem('usuarios'));
                jaExisteEmail = getUsuarios.some(u => u.email == usuario.email);

                if(jaExisteEmail) {
                    const msgRetornoEmailIndisponivel = document.querySelector('.msg-email-indisponivel');
                    msgRetornoEmailIndisponivel.classList.add('top-0');           

                    setTimeout(() => {
                        msgRetornoEmailIndisponivel.classList.remove('top-0'); 
                    }, 2500);

                } else { 
                    usuarios = [...getUsuarios, usuario];
                }

            } else {
                usuarios = [usuario];
            }

            if(!jaExisteEmail) { 
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                localStorage.setItem('usuarios', JSON.stringify(usuarios));

                const msgRetornoCadastrarUsuario = document.querySelector('.msg-usuario-cadastrado');
                msgRetornoCadastrarUsuario.classList.add('top-0');

                setTimeout(() => {
                    window.location.href = './index.html';
                }, 2000);
            }

        });
    }

    const linkEntrar = document.querySelector('.entrar');
    if(linkEntrar) {
        linkEntrar.addEventListener('click', e => {
            window.location.href = './login.html';
        });
    }