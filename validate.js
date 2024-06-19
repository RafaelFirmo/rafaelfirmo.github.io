const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar o campo de nome
    const nomeValue = nome.value.trim();
    if (nomeValue === '') {
        document.getElementById('nomeError').textContent = 'Informe seu nome.';
        nome.classList.add('error-border');
    } else {
        document.getElementById('nomeError').textContent = '';
        nome.classList.remove('error-border');
    }
    // validar o campo email
    const emailValue = email.value.trim();
    if (emailValue === '' || (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))) {
        document.getElementById('emailError').textContent = 'Informe um email válido ( ex: johndoe@example.com ).';
        email.classList.add('error-border'); 
    } else {
        document.getElementById('emailError').textContent = '';
        email.classList.remove('error-border');
    }
    // validar campo assunto
    const assuntoValue = assunto.value.trim();
    if (assuntoValue === '') {
        document.getElementById('assuntoError').textContent = 'Informe o assunto.';
        assunto.classList.add('error-border');
    } else {
        document.getElementById('assuntoError').textContent = '';
        assunto.classList.remove('error-border');
    }
    // validar campo mensagem
    const mensagemValue = mensagem.value.trim();
    if (mensagemValue === '') {
        document.getElementById('mensagemError').textContent = 'informe o assunto.';
        mensagem.classList.add('error-border');
    } else {
        document.getElementById('mensagemError').textContent = '';
        mensagem.classList.remove('error-border');
    }

    if (nomeValue !== '' && emailValue !== '' && assuntoValue !== '' && mensagemValue !== '') {

        form.reset();
    }

});






































/*function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const mensagensErro = {
        nome: document.getElementById('nomeError'),
        email: document.getElementById('emailError'),
        assunto: document.getElementById('assuntoError'),
        mensagem: document.getElementById('mensagemError'),
    };

    let formularioValido = true; // Presume validade inicial

    // Limpar mensagens de erro anteriores
    for (const idErro in mensagensErro) {
        mensagensErro[idErro].textContent = '';
    }

    // Validar campos e exibir mensagens de erro se vazios
    if (!nome) {
        mensagensErro.nome.textContent = 'Informe seu nome.';
        formularioValido = false;
    }

    // Validação de email aprimorada com expressão regular e clareza
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !regexEmail.test(email)) {
        mensagensErro.email.textContent = 'Informe um email válido (ex.: email@exemplo.com).';
        formularioValido = false;
    }

    if (!assunto) {
        mensagensErro.assunto.textContent = 'Informe o assunto da mensagem.';
        formularioValido = false;
    }

    if (!mensagem) {
        mensagensErro.mensagem.textContent = 'Escreva sua mensagem.';
        formularioValido = false;
    }

    // Evitar envio do formulário e indicar erros visualmente
    if (!formularioValido) {
        event.preventDefault(); // Assumindo que o envio do formulário é acionado por um evento

        // Adicionar bordas vermelhas em campos inválidos
        if (!nome) {
            document.getElementById('nome').style.backgroundColor = '#fde2dd';
        } else {
            document.getElementById('nome').style.backgroundColor = ''; // Limpar borda se válido
        }

        if (!email || !regexEmail.test(email)) {
            document.getElementById('email').style.backgroundColor = '#fde2dd';
        } else {
            document.getElementById('email').style.backgroundColor = '';
        }

        if (!assunto) {
            document.getElementById('assunto').style.backgroundColor = '#fde2dd';
        } else {
            document.getElementById('assunto').style.backgroundColor = '';
        }

        if (!mensagem) {
            document.getElementById('mensagem').style.backgroundColor = '#fde2dd';
        } else {
            document.getElementById('mensagem').style.backgroundColor = '';
        }
    }

    return formularioValido; // Retornar o resultado da validação
}

*/
