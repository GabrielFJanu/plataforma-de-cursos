# Plataforma de Cursos

Projeto backend em Node.js para cadastrar usuarios e cursos em video. A API permite criar, listar, atualizar e remover usuarios e cursos, enquanto a pagina inicial exibe os cursos cadastrados com videos do YouTube.

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

Instale as dependencias:

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

## Autenticacao

As rotas da API usam token JWT no formato `Bearer Token`, exceto as rotas de autenticacao.

### 1. Cadastre um usuario

O username informado nao pode estar cadastrado no sistema ainda.

Envie uma requisicao `POST` para:

```text
/api/auth/register
```

Exemplo de corpo da requisicao:

```json
{
  "username": "gabriel",
  "password": "senha123"
}
```

### 2. Faca login

Envie uma requisicao `POST` para:

```text
/api/auth/login
```

Exemplo de corpo da requisicao:

```json
{
  "username": "gabriel",
  "password": "senha123"
}
```

A resposta retorna um token. Use esse token no header das proximas requisicoes:

```text
Authorization: Bearer seu-token
```

## Como criar um curso

Para criar um curso, e necessario estar autenticado. O usuario do token sera registrado automaticamente como criador do curso.

Envie uma requisicao `POST` para:

```text
/api/courses
```

Exemplo de corpo da requisicao:

```json
{
  "title": "Curso de JavaScript",
  "description": "Introducao ao JavaScript para iniciantes",
  "knowledgeArea": "Programacao",
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

O sistema extrai automaticamente o ID do video do YouTube para exibir o curso na pagina inicial.
Nas respostas da API, o campo `creator` do curso retorna os dados basicos do usuario criador.

## Autorizacao

- Rotas de usuarios sao restritas a usuarios com papel `admin`, exceto a listagem de cursos por usuario.
- Qualquer usuario autenticado pode listar, buscar e criar cursos.
- Apenas o criador do curso ou um usuario `admin` pode substituir, atualizar ou remover um curso.

## Rotas principais

### Auth

| Metodo | Rota | Descricao |
| --- | --- | --- |
| POST | `/api/auth/register` | Cadastra usuario comum |
| POST | `/api/auth/login` | Autentica usuario e retorna token |

### Usuarios

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/api/users` | Lista usuarios |
| POST | `/api/users` | Cria usuario |
| GET | `/api/users/:id` | Busca usuario por ID |
| PUT | `/api/users/:id` | Substitui todos os dados do usuario |
| PATCH | `/api/users/:id` | Atualiza parcialmente o usuario |
| DELETE | `/api/users/:id` | Remove usuario |
| GET | `/api/users/:id/courses` | Lista cursos de um usuario |

### Cursos

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/api/courses` | Lista cursos |
| POST | `/api/courses` | Cria curso |
| GET | `/api/courses/:id` | Busca curso por ID |
| PUT | `/api/courses/:id` | Substitui todos os dados do curso, permitido para criador ou admin |
| PATCH | `/api/courses/:id` | Atualiza parcialmente o curso, permitido para criador ou admin |
| DELETE | `/api/courses/:id` | Remove curso, permitido para criador ou admin |

## Observacoes

- A porta padrao do servidor e `3000`.
- A pagina `/` mostra os cursos cadastrados.
- Ao remover um usuario, os cursos criados por ele tambem sao removidos.
- Os IDs recebidos em parametros de rota devem ser ObjectIds validos.
- `PUT` espera o corpo completo do recurso; `PATCH` aceita atualizacao parcial.
