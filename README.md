# Plataforma de Cursos

API REST para cadastro e gerenciamento de cursos em vídeo. A aplicação permite autenticar usuários, cadastrar cursos com links do YouTube e exibir os cursos cadastrados em uma página web.

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

## Funcionalidades

- Cadastro e login de usuários.
- Autenticação com token JWT.
- Controle de permissões por papel de usuário: `user` e `admin`.
- CRUD de usuários para administradores.
- CRUD de cursos para usuários autenticados.
- Validação dos dados enviados para a API.
- Extração automática do ID de vídeos do YouTube.
- Página inicial com os cursos cadastrados.
- Documentação interativa com Swagger.

## Pré-requisitos

- Node.js instalado
- MongoDB disponível localmente ou em uma URL remota

## Como executar

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=sua-string-de-conexao-mongodb
JWT_SECRET=sua-chave-secreta
PORT=3000
BCRYPT_SALT_ROUNDS=10
```

`PORT` e `BCRYPT_SALT_ROUNDS` são opcionais. Por padrão, a aplicação usa a porta `3000` e `10` salt rounds.

Inicie o servidor:

```bash
npm start
```

Acesse:

- Aplicação web: `http://localhost:3000`
- Swagger: `http://localhost:3000/api-docs`

## Regras principais

- As rotas de autenticação (`/api/auth/register` e `/api/auth/login`) são públicas.
- As demais rotas da API exigem token JWT no header `Authorization: Bearer seu-token`.
- Usuários `admin` podem gerenciar usuários e alterar ou remover qualquer curso.
- Usuários `user` podem criar cursos e alterar ou remover apenas os próprios cursos.
- Usuários cadastrados por `/api/auth/register` recebem o papel `user`.
- O `username` de cada usuário deve ser único.
- O token JWT expira em 1 hora.
- Senhas são armazenadas com hash bcrypt.
- Ao remover um usuário, os cursos criados por ele também são removidos.
- Cursos aceitam URLs do YouTube nos formatos `youtube.com/watch?v=VIDEO_ID` e `youtu.be/VIDEO_ID`, em que `VIDEO_ID` deve ter 11 caracteres.

## Rotas principais

### Autenticação

| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/api/auth/register` | Cadastra um usuário comum |
| POST | `/api/auth/login` | Autentica o usuário e retorna um token |

### Usuários

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/users` | Lista usuários |
| POST | `/api/users` | Cria usuário |
| GET | `/api/users/:id` | Busca usuário por ID |
| PUT | `/api/users/:id` | Substitui um usuário |
| PATCH | `/api/users/:id` | Atualiza parcialmente um usuário |
| DELETE | `/api/users/:id` | Remove um usuário |
| GET | `/api/users/:id/courses` | Lista cursos criados por um usuário |

### Cursos

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/courses` | Lista cursos |
| POST | `/api/courses` | Cria curso |
| GET | `/api/courses/:id` | Busca curso por ID |
| PUT | `/api/courses/:id` | Substitui um curso |
| PATCH | `/api/courses/:id` | Atualiza parcialmente um curso |
| DELETE | `/api/courses/:id` | Remove um curso |

## Exemplos

Cadastro ou login:

```json
{
  "username": "gabriel",
  "password": "senha1234"
}
```

Criação de curso:

```json
{
  "title": "Curso de C++",
  "description": "Introdução ao C++ para iniciantes",
  "knowledgeArea": "Programação",
  "url": "https://www.youtube.com/watch?v=Y9Zw6xOGly0"
}
```
