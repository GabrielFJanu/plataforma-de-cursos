export class CursoResponseDto {
    constructor(cursoFromDb) {
        this.id = cursoFromDb.id
        this.titulo = cursoFromDb.titulo
        this.descricao = cursoFromDb.descricao
        this.area_conhecimento = cursoFromDb.area_conhecimento
        this.url = cursoFromDb.url
        // youtube_id omitido
        // id_criador omitido
    }
}