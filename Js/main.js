// main.js
import { registrarUsuario, autenticarUsuario } from './auth.js';
import { exibirMensagem, validarEmail, validarSenhas, validarComplexidadeSenha } from './utils.js';

// Seletores de input
const btnCadastrar = document.querySelector('#register');
const btnAcessar = document.querySelector('#access');

btnCadastrar?.addEventListener('click', async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const email = form.querySelector('input[type="email"]').value.trim();
    const senha = form.querySelector('#senha').value.trim();
    const confirmarSenha = form.querySelector('#confirmar-senha').value.trim();

    if (!validarEmail(email)) return exibirMensagem('E-mail inválido!');
    if (!validarSenhas(senha, confirmarSenha)) return exibirMensagem('As senhas não coincidem!');
    if (!validarComplexidadeSenha(senha)) return exibirMensagem('A senha deve conter pelo menos 1 letra maiúscula (A-Z) e 1 número (0-9)!');

    btnCadastrar.textContent = "Cadastrando...";
    btnCadastrar.dataset.text = "Cadastrando...";
    btnCadastrar.classList.add("loading");
    btnCadastrar.disabled = true;

    const res = await registrarUsuario(email, senha, confirmarSenha);

    btnCadastrar.classList.remove("loading");
    btnCadastrar.disabled = false;
    btnCadastrar.textContent = "Cadastrar";

    if (res.status === 200 || res.status === 201) {
        salvarNoLocalStorage({
            email,
            token: res.data.token,
            expira: res.data.dataExpiracao
        });
        return;
    }

    exibirMensagem(res.data?.mensagem || 'Erro ao cadastrar usuário.');
});

btnAcessar?.addEventListener('click', async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const email = form.querySelector('input[type="email"]').value.trim();
    const senha = form.querySelector('input[type="password"]').value.trim();

    if (!validarEmail(email)) return exibirMensagem('E-mail inválido!');
    if (!senha) return exibirMensagem('Informe a senha.');

    btnAcessar.textContent = "Acessando...";
    btnAcessar.dataset.text = "Acessando...";
    btnAcessar.classList.add("loading");
    btnAcessar.disabled = true;

    const res = await autenticarUsuario(email, senha);

    btnAcessar.classList.remove("loading");
    btnAcessar.disabled = false;
    btnAcessar.textContent = "Acessar";

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

document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        const target = document.getElementById(icon.dataset.target);
        const isPassword = target.type === 'password';
        target.type = isPassword ? 'text' : 'password';
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
});
