# API GrowTwitter

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-v14.17.6-green" alt="Node.js">
  <img src="https://img.shields.io/badge/Prisma-v5.3.1-blue" alt="Prisma">
  <img src="https://img.shields.io/badge/Bcrypt-v5.1.1-orange" alt="Bcrypt">
  <img src="https://img.shields.io/badge/PostgreSQL-v14.1-blue" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Express-v4.18.2-lightgrey" alt="Express">
  <img src="https://img.shields.io/badge/UUID-v9.0.1-lightgrey" alt="UUID">
  <img src="https://img.shields.io/badge/Licença-ISC-lightgrey.svg" alt="Licença ISC">
</div>

## Visão Geral

A API GrowTwitter é uma plataforma poderosa que combina as tecnologias mais recentes para criar uma experiência incrível de mídia social. Ela foi construída com Node.js, Prisma, Bcrypt e PostgreSQL, oferecendo recursos avançados de autenticação de usuário, gerenciamento de tweets, likes, retweets, seguidores e muito mais.

---

## Table of Contents

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Utilização](#utilização)
- [Rotas da API](#rotas-da-api)
- [Dependências](#dependências)
- [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
- [Licença](#licença)
- [Autor](#autor)

---

## Instalação

Siga estes passos para configurar o projeto em sua máquina local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/cadonaenrike/api-growtwitter.git
   cd api-growtwitter
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o banco de dados:**

   Crie um arquivo `.env` na raiz do projeto e configure a conexão com o banco de dados PostgreSQL:

   ```env
   DATABASE_URL=postgresql://seu-usuario:sua-senha@localhost:5432/seu-banco-de-dados
   ```

4. **Crie o esquema do banco de dados e insira dados iniciais:**

   ```bash
   npx prisma db push
   ```

5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

---

## Configuração

A API utiliza variáveis de ambiente para configurações. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de acordo com suas necessidades.

Exemplo de arquivo `.env`:

```env
DATABASE_URL=postgresql://seu-usuario:sua-senha@localhost:5432/seu-banco-de-dados
```

---

## Utilização

Esta seção descreve como utilizar a API GrowTwitter. Certifique-se de ter seguido os passos de instalação e configuração antes de continuar.

1. **Autenticação de Usuário:**

   - Para realizar o login de um usuário, faça uma requisição POST para `/api/auth/login`.
   - Para fazer logout, acesse `/api/auth/logout`.

2. **Likes:**

   - Para listar todos os likes, acesse `/api/likes`.
   - Para criar um novo like, faça uma requisição POST para `/api/likes`.
   - Para excluir um like, acesse `/api/likes/:id_like/:id_usuario`.

3. **Retweets:**

   - Para listar todos os retweets, acesse `/api/retweets`.
   - Para criar um novo retweet, faça uma requisição POST para `/api/retweets`.
   - Para atualizar um retweet existente, acesse `/api/retweets`.
   - Para excluir um retweet, acesse `/api/retweets/:id_retweet/:id_usuario`.

4. **Seguidores:**

   - Para listar todos os seguidores, acesse `/api/seguidores`.
   - Para seguir um usuário, faça uma requisição POST para `/api/seguidores/seguir`.
   - Para deixar de seguir um usuário, acesse `/api/seguidores/deixar-de-seguir`.

5. **Tweets:**

   - Para listar todos os tweets, acesse `/api/tweets`.
   - Para criar um novo tweet, faça uma requisição POST para `/api/tweets`.
   - Para atualizar um tweet existente, acesse `/api/tweets`.
   - Para excluir um tweet, acesse `/api/tweets/:id_tweet/:id_usuario`.

6. **Usuários:**

   - Para criar um usuário, faça uma requisição POST para `/api/usuarios`.
   - Para listar todos os usuários, acesse `/api/usuarios`.
   - Para atualizar um usuário, faça uma requisição PUT para `/api/usuarios/:id`.
   - Para excluir um usuário, acesse `/api/usuarios/:id`.

---

## Rotas da API

A API GrowTwitter segue as melhores práticas de organização de código com base na arquitetura Model-Controller-DTO-Service-Route (Modelo-Controlador-Transferência de Dados-Serviço-Rota). Abaixo estão as principais rotas da API e suas responsabilidades:

- **`/models`**: Os modelos definem a estrutura dos objetos de dados, como usuário, tweet, like, retweet, etc.

- **`/controllers`**: Os controladores tratam as solicitações HTTP, conectando-se aos serviços e retornando respostas adequadas.

- **`/dtos`**: Os objetos de transferência de dados (DTOs) são usados para validar e transferir dados entre o cliente e o servidor de forma segura.

- **`/services`**: Os serviços contêm a lógica de negócios da aplicação e interagem com os modelos e controladores.

- **`/routes`**: As rotas definem as URLs da API e encaminham as solicitações HTTP aos controladores apropriados.

---

## Dependências

A API utiliza as seguintes dependências:

- Node.js v14.17.6
- Prisma v5.3.1
- Bcrypt v5.1.1
- PostgreSQL v14.1
- Express v4.18.2
- UUID v9.0.1

---

## Dependências de Desenvolvimento

As dependências de desenvolvimento incluem:

- TypeScript v5.2.2
- @types/bcrypt v5.0.0
- @types/cors

 v2.8.14
- @types/express v4.17.18
- @types/node v20.7.0
- @types/uuid v9.0.4
- ts-node-dev v2.0.0

---

## Licença

Este projeto é licenciado sob a Licença ISC. Consulte o arquivo [LICENSE.md](LICENSE.md) para obter mais detalhes.

---

## Autor

- Éverton Henrique Cadona
