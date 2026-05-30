export class CourseResponseDto {
    constructor(courseFromDb) {
        this.id = courseFromDb.id
        this.title = courseFromDb.title
        this.description = courseFromDb.description
        this.knowledgeArea = courseFromDb.knowledgeArea
        this.url = courseFromDb.url
        this.youtubeId = courseFromDb.youtubeId
        this.creatorId = courseFromDb.creatorId
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
        this.creatorId = courseWithCreatorFromDb.creatorId
        this.createdAt = courseWithCreatorFromDb.createdAt
        this.creator = courseWithCreatorFromDb.creator ? { username: courseWithCreatorFromDb.creator.username } : null
    }
}
