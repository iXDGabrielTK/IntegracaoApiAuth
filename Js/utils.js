// utils.js
export function exibirMensagem(mensagem, tipo = 'info') {
    alert(mensagem);
}

export function validarEmail(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

export function validarSenhas(senha, confirmarSenha) {
    return senha === confirmarSenha;
}
