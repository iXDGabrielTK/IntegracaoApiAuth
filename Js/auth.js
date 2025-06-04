// auth.js
const API_BASE_URL = 'https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com';

export async function registrarUsuario(email, senha, senhaConfirmada) {
    try {
        const response = await fetch(`${API_BASE_URL}/Autenticacao/registrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha, senhaConfirmada })
        });

        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        return { status: 500, data: { mensagem: 'Erro de rede ou servidor fora do ar.' } };
    }
}

export async function autenticarUsuario(email, senha) {
    try {
        const response = await fetch(`${API_BASE_URL}/Autenticacao/autenticar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        return { status: 500, data: { mensagem: 'Erro de rede ou servidor fora do ar.' } };
    }
}