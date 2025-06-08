// utils.js
export function exibirMensagem(texto) {
    const mensagensIgnoradas = [
        'Erro inesperado da API.',
        'Erro de rede ou servidor fora do ar.'
    ];

    if (mensagensIgnoradas.includes(texto)) {
        console.warn('Mensagem ignorada no toast:', texto);
        return;
    }

    const toast = document.getElementById('mensagem');
    toast.textContent = texto;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

export function validarEmail(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

export function validarComplexidadeSenha(senha) {
    const temLetraMaiuscula = /[A-Z]/.test(senha);

    const temNumero = /[0-9]/.test(senha);

    return temLetraMaiuscula && temNumero;
}

export function validarSenhas(senha, confirmarSenha) {
    return senha === confirmarSenha;
}
