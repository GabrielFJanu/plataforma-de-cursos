# Plataforma de Cursos

Projeto backend em Node.js para cadastrar usuários e cursos em vídeo. A API permite criar, listar, atualizar e remover usuários e cursos, enquanto a página inicial exibe os cursos cadastrados com vídeos do YouTube.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- Pug
- express-validator
- Swagger

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

Acesse:

```text
http://localhost:3000
```

## Autenticação

As rotas da API usam token JWT no formato `Bearer Token`, exceto as rotas de autenticação.

### 1. Cadastre um usuário

O username informado não pode estar cadastrado no sistema ainda.

Envie uma requisição `POST` para:

```text
/api/auth/register
```

Exemplo de corpo da requisição:

```json
{
  "username": "gabriel",
  "password": "senha123"
}
```

### 2. Faça login

Envie uma requisição `POST` para:

```text
/api/auth/login
```

Exemplo de corpo da requisição:

```json
{
  "username": "gabriel",
  "password": "senha123"
}
```

A resposta retorna um token. Use esse token no header das próximas requisições:

```text
Authorization: Bearer seu-token
```

## Como criar um curso

Para criar um curso, é necessário estar autenticado. O usuário do token será registrado automaticamente como criador do curso.

Envie uma requisição `POST` para:

```text
/api/courses
```

Exemplo de corpo da requisição:

```json
{
  "title": "Curso de JavaScript",
  "description": "Introdução ao JavaScript para iniciantes",
  "knowledgeArea": "Programação",
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

O sistema extrai automaticamente o ID do vídeo do YouTube para exibir o curso na página inicial.
Nas respostas da API, o campo `creator` do curso retorna os dados básicos do usuário criador.

## Autorização

- Rotas de usuários são restritas a usuários com papel `admin`, exceto a listagem de cursos por usuário.
- Qualquer usuário autenticado pode listar, buscar e criar cursos.
- Apenas o criador do curso ou um usuário `admin` pode substituir, atualizar ou remover um curso.

## Rotas principais

### Auth

| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/api/auth/register` | Cadastra usuário comum |
| POST | `/api/auth/login` | Autentica usuário e retorna token |

### Usuários

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/users` | Lista usuários |
| POST | `/api/users` | Cria usuário |
| GET | `/api/users/:id` | Busca usuário por ID |
| PUT | `/api/users/:id` | Substitui todos os dados do usuário |
| PATCH | `/api/users/:id` | Atualiza parcialmente o usuário |
| DELETE | `/api/users/:id` | Remove usuário |
| GET | `/api/users/:id/courses` | Lista cursos de um usuário |

### Cursos

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/courses` | Lista cursos |
| POST | `/api/courses` | Cria curso |
| GET | `/api/courses/:id` | Busca curso por ID |
| PUT | `/api/courses/:id` | Substitui todos os dados do curso, permitido para criador ou admin |
| PATCH | `/api/courses/:id` | Atualiza parcialmente o curso, permitido para criador ou admin |
| DELETE | `/api/courses/:id` | Remove curso, permitido para criador ou admin |

## Observações

- A porta padrão do servidor e `3000`.
- A página `/` mostra os cursos cadastrados.
- Ao remover um usuário, os cursos criados por ele também são removidos.
- Os IDs recebidos em parametros de rota devem ser ObjectIds válidos.
- `PUT` espera o corpo completo do recurso; `PATCH` aceita atualização parcial.
