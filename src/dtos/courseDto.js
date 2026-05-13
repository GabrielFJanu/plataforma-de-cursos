export class CourseResponseDto {
    constructor(courseFromDb) {
        this.id = courseFromDb.id
        this.title = courseFromDb.title
        this.description = courseFromDb.description
        this.knowledgeArea = courseFromDb.knowledgeArea
        this.url = courseFromDb.url
        this.youtubeId = courseFromDb.youtubeId
        // creatorId omitido
        this.createdAt = courseFromDb.createdAt
    }
}

export class CourseWithCreatorResponseDto {
    constructor(courseWithCreatorFromDb) {
        this.id = courseWithCreatorFromDb.id
        this.title = courseWithCreatorFromDb.title
        this.description = courseWithCreatorFromDb.description
        this.knowledgeArea = courseWithCreatorFromDb.knowledgeArea
        this.url = courseWithCreatorFromDb.url
        this.youtubeId = courseWithCreatorFromDb.youtubeId
        // creatorId omitido
        this.createdAt = courseWithCreatorFromDb.createdAt
        this.creator = courseWithCreatorFromDb.creator ?
        {
            firstname: courseWithCreatorFromDb.creator.firstname,
            lastname: courseWithCreatorFromDb.creator.lastname
        } : null
    }
}