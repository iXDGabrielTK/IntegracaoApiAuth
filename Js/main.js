// main.js
import { registrarUsuario, autenticarUsuario } from './auth.js';
import { exibirMensagem, validarEmail, validarSenhas } from './utils.js';

// Seletores de input
const btnCadastrar = document.querySelector('#register');
const btnAcessar = document.querySelector('#access');

btnCadastrar?.addEventListener('click', async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const email = form.querySelector('input[type="email"]').value.trim();
    const senha = form.querySelector('input[type="password"]:nth-of-type(1)').value.trim();
    const confirmarSenha = form.querySelector('input[type="password"]:nth-of-type(2)')?.value.trim();

    if (!validarEmail(email)) return exibirMensagem('E-mail inválido!');
    if (!validarSenhas(senha, confirmarSenha)) return exibirMensagem('As senhas não coincidem!');

    const res = await registrarUsuario(email, senha, confirmarSenha);
    if (res.status === 200 || res.status === 201) {
        salvarNoLocalStorage({
            email,
            token: res.data.token,
            expira: res.data.dataExpiracao
        });
        window.location.href = 'Pages/boas-vindas.html';
    } else {
        exibirMensagem(res.data.mensagem || 'Erro ao cadastrar usuário.');
    }
});

btnAcessar?.addEventListener('click', async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const email = form.querySelector('input[type="email"]').value.trim();
    const senha = form.querySelector('input[type="password"]').value.trim();

    if (!validarEmail(email)) return exibirMensagem('E-mail inválido!');
    if (!senha) return exibirMensagem('Informe a senha.');

    const res = await autenticarUsuario(email, senha);
    if (res.status === 200) {
        salvarNoLocalStorage({
            email,
            token: res.data.token,
            expira: res.data.dataExpiracao
        });
        window.location.href = 'Pages/boas-vindas.html';
    } else {
        exibirMensagem(res.data.mensagem || 'Falha na autenticação.');
    }
});

function salvarNoLocalStorage(data) {
    localStorage.setItem('usuario', JSON.stringify(data));
}