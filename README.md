# 🔐 Projeto: Integração Front-End com API de Autenticação - UMFG

## 📌 Descrição

Este projeto consiste em uma aplicação web de autenticação que integra um front-end moderno e responsivo com a API de autenticação da UMFG. Os usuários podem realizar cadastro, login e acessar uma área autenticada, com controle de sessão por token JWT. A aplicação oferece feedback visual amigável, animações modernas, validações rigorosas e uma interface elegante e responsiva.

## 🚀 Funcionalidades Implementadas

- 🔗 **Integração com a API**: Comunicação via `fetch` com os endpoints `/Autenticacao/registar` e `/Autenticacao/autenticar`.
- ✅ **Validações completas**:
  - Validação de e-mail.
  - Verificação de senhas coincidentes.
  - Requisitos de complexidade de senha (mínimo 1 letra maiúscula e 1 número).
- 🛡️ **Tratamento de Erros**:
  - Mensagens claras para status `400`, `401`, `409`, `500` etc.
  - Toasts configurados para ignorar erros genéricos inesperados e focar em mensagens relevantes ao usuário.
- 🎨 **Design customizado e responsivo**:
  - Interface moderna com suporte a modo escuro.
  - Animações entre login e cadastro.
  - Layout adaptado para dispositivos móveis e telas grandes.
- 🔐 **Armazenamento seguro de sessão**:
  - Salvamento de token e data de expiração em `localStorage`.
  - Tela de boas-vindas personalizada com os dados do usuário autenticado.
- 👁️ **Melhorias na experiência do usuário**:
  - Ícones de exibir/ocultar senha nos campos `password`.
  - Botões com feedback visual de carregamento.
  - Mensagens de toast automáticas com exibição temporizada.

## 🧩 Estrutura do Projeto

```
IntegracaoApiAuth/
├── Css/
│   ├── boas-vindas.css         # Estilos da tela de boas-vindas (incorporado ao styles.css)
│   ├── styles.css              # Estilos globais e responsivos
├── Js/
│   ├── auth.js                 # Comunicação com API
│   ├── login.js                # Animações de transição
│   ├── main.js                 # Lógica de login/cadastro
│   └── utils.js                # Validações e mensagens
├── Pages/
│   ├── boas-vindas.html        # Tela pós-login
│   └── erro.html               # Tela de erro (token ausente ou expirado)
├── index.html                  # Tela principal com formulários de login e cadastro
├── README.md                   # Documentação do projeto
```

## 🌐 Hospedagem

- O projeto está publicado e acessível online via Vercel:  
  👉 [https://integracao-api-auth.vercel.app](https://integracao-api-auth.vercel.app)

- A API de autenticação está publicada e acessível via:  
  👉 [https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com/swagger/index.html](https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com/swagger/index.html)

## 📸 Demonstração

> ✅ Cadastro, login, exibição de toast, animações, redirecionamento para tela de boas-vindas, e logout funcionando de ponta a ponta.

## 📦 Como Executar

1. Clone este repositório
2. Abra `index.html` em um navegador moderno
3. Teste os fluxos de cadastro e login com a API já hospedada

## 🧠 Regras e Boas Práticas

- Repositório deve permanecer público
- Commits frequentes e descritivos são recomendados
- Evite anexos `.zip`
- Códigos copiados resultam em **nota zero**

## 🎁 Bônus

- +1 ponto extra para projeto funcionando e publicado na nuvem

---

### 🤝 Desenvolvido por:

Gabriel Ferrari  
Este projeto foi desenvolvido com foco em experiência do usuário, segurança básica e integração com API real de autenticação.