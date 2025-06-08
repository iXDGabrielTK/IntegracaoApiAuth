// auth.js
const API_BASE_URL = 'https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com';

async function extrairResposta(response) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        try {
            return await response.json();
        } catch {
            return { mensagem: 'Erro inesperado da API.' };
        }
    }

    try {
        const text = await response.text();
        return { mensagem: text || 'Erro inesperado da API.' };
    } catch {
        return { mensagem: 'Erro inesperado da API.' };
    }
}


export async function registrarUsuario(email, senha, senhaConfirmada) {
    try {
        const response = await fetch(`${API_BASE_URL}/Autenticacao/registar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha, senhaConfirmada })
        });

        const data = await extrairResposta(response);

        if (response.status === 400 && typeof data.mensagem === 'string') {
            if (data.mensagem.includes('Passwords must have at least')) {
                data.mensagem = 'A senha deve conter ao menos 1 letra maiúscula, 1 número e 1 caractere especial.';
            }
        }
        
        if (response.status === 409) {
            return { status: 409, data: { mensagem: 'E-mail já cadastrado.' } };
        }
        if (response.status === 500) {
            return { status: 500, data: { mensagem: 'Erro interno do servidor.' } };
        }
        if (response.status === 201) {
            return { status: 201, data };
        }
        if (response.status === 200) {
            return { status: 200, data };
        }

        return { status: response.status, data };
    } catch (error) {
        return {
            status: 500,
            data: { mensagem: 'Erro de rede ou servidor fora do ar.' }
        };
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

        const data = await extrairResposta(response);

        if (response.status === 401) {
            return { status: 401, data: { mensagem: 'E-mail ou senha inválidos.' } };
        }
        if (response.status === 403) {
            return { status: 403, data: { mensagem: 'Conta não ativada. Verifique seu e-mail.' } };
        }
        if (response.status === 404) {
            return { status: 404, data: { mensagem: 'Usuário não encontrado.' } };
        }

        return { status: response.status, data };
    } catch (error) {
        return {
            status: 500,
            data: { mensagem: 'Erro de rede ou servidor fora do ar.' }
        };
    }
}
