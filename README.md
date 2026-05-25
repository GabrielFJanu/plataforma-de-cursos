# Plataforma de Cursos

Projeto backend em Node.js para cadastrar usuarios e cursos em video. A API permite criar, listar, atualizar e remover usuarios e cursos, enquanto a pagina inicial exibe os cursos cadastrados com videos do YouTube.

## Tecnologias

- Node.js
- Express
- Pug
- LowDB
- express-validator

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

## Como criar um curso

Para criar um curso, primeiro e necessario cadastrar um usuario, pois todo curso precisa estar ligado a um criador.

### 1. Crie um usuario

O email informado nao pode estar cadastrado no sistema ainda.

Envie uma requisicao `POST` para:

```text
/api/users
```

Exemplo de corpo da requisicao:

```json
{
  "firstName": "Gabriel",
  "lastName": "Januario",
  "email": "gabriel@email.com"
}
```

A resposta vai retornar um usuario com `id`. Guarde esse valor, porque ele sera usado como `creatorId` ao criar o curso.

### 2. Crie um curso usando o ID do usuario

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
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "creatorId": "id-do-usuario-criado"
}
```

O sistema valida se o usuario existe e extrai automaticamente o ID do video do YouTube para exibir o curso na pagina inicial.

## Rotas principais

### Usuarios

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/api/users` | Lista usuarios |
| POST | `/api/users` | Cria usuario |
| GET | `/api/users/:id` | Busca usuario por ID |
| PUT | `/api/users/:id` | Substitui usuario |
| PATCH | `/api/users/:id` | Atualiza usuario |
| DELETE | `/api/users/:id` | Remove usuario |
| GET | `/api/users/:id/courses` | Lista cursos de um usuario |

### Cursos

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/api/courses` | Lista cursos |
| POST | `/api/courses` | Cria curso |
| GET | `/api/courses/:id` | Busca curso por ID |
| PUT | `/api/courses/:id` | Substitui curso |
| PATCH | `/api/courses/:id` | Atualiza curso |
| DELETE | `/api/courses/:id` | Remove curso |

## Observacoes

- O banco local fica no arquivo `db.json`.
- A porta padrao do servidor e `3000`.
- A pagina `/` mostra os cursos cadastrados.
- Ao remover um usuario, os cursos criados por ele tambem sao removidos.
