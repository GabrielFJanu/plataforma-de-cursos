export class CourseResponseDto {
    constructor(courseFromDb) {
        this.id = courseFromDb.id
        this.title = courseFromDb.title
        this.description = courseFromDb.description
        this.knowledgeArea = courseFromDb.knowledgeArea
        this.url = courseFromDb.url
        // youtubeId omitido
        // creatorId omitido
    }
}