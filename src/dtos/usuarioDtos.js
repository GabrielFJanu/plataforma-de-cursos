export class UsuarioResponseDto {
    constructor(usuarioFromDb) {
        this.id = usuarioFromDb.id
        this.nome = usuarioFromDb.nome
        this.sobrenome = usuarioFromDb.sobrenome
        this.email = usuarioFromDb.email
    }
}