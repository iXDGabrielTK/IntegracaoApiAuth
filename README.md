# 📃 Projeto: Integração Front-End com API de Autenticação - UMFG

## 🌟 Objetivo

Este projeto tem como finalidade integrar a interface front-end fornecida com a API de autenticação da UMFG. A proposta é permitir que usuários se cadastrem, realizem login e visualizem uma tela de boas-vindas após a autenticação.

## 🔗 Recursos Utilizados

- Projeto base com tela de login (HTML + CSS + JS)
- API documentada via Swagger: [UMFG Auth API Swagger](https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com/swagger/index.html)
- Plataforma de hospedagem (ex: Vercel para o front-end)

## ✅ Tarefas

### 1. Integração com a API

- Utilizar os endpoints da API para cadastro e autenticação de usuários.
- Tratar corretamente os status HTTP de erro e sucesso conforme documentação do Swagger.
- Exibir mensagens amigáveis ao usuário.

### 2. Formulário de Cadastro

- Campos obrigatórios:

  - 📧 E-mail
  - 🔑 Senha
  - 🔒 Confirmação de Senha

- Validar se as senhas coincidem antes de enviar.
- Exibir mensagens como "Usuário já cadastrado!"

### 3. Tela de Login

- Campos obrigatórios:

  - 📧 E-mail
  - 🔑 Senha

- Tratar mensagens de erro (ex: "usuário ou senha inválida").
- Armazenar o token JWT de forma segura.

### 4. Tela de Boas-Vindas

- Após login ou cadastro, redirecionar para uma tela com a mensagem:

  > "Seja bem-vindo(a), email_do_usuario_autenticado! Seu token expira data_expiracao_do_token"

- Criar uma interface amigável e responsiva.

### 5. Customização

- Aplicar estilo visual próprio, sem comprometer a usabilidade.
- Pode alterar cores, fontes, animações etc.

## 📦 Entrega

- Projeto deve estar versionado em um repositório **público** no **GitHub**.
- Envie **somente o link do repositório**.

## ⚠️ Regras Importantes

- Envio de `.zip` ou anexo de código = **nota zero**
- Plágio de código = **nota zero** para todos os envolvidos
- Mantenha commits frequentes e descritivos

## 🏰 Bônus

- +1 ponto extra para quem disponibilizar o front-end funcionando na nuvem (ex: Vercel), integrado com a API

---

## 😊 Dúvidas?

Entre em contato com o responsável da atividade. Bom desenvolvimento!
