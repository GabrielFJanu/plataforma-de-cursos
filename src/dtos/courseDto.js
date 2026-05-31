export class CourseResponseDto {
    constructor(courseFromDb) {
        this._id = courseFromDb._id.toString()
        this.title = courseFromDb.title
        this.description = courseFromDb.description
        this.knowledgeArea = courseFromDb.knowledgeArea
        this.url = courseFromDb.url
        this.youtubeId = courseFromDb.youtubeId
        this.creator = courseFromDb.creator.toString()
        this.createdAt = courseFromDb.createdAt
    }
}

export class CourseWithCreatorResponseDto {
    constructor(courseWithCreatorFromDb) {
        this._id = courseWithCreatorFromDb._id.toString()
        this.title = courseWithCreatorFromDb.title
        this.description = courseWithCreatorFromDb.description
        this.knowledgeArea = courseWithCreatorFromDb.knowledgeArea
        this.url = courseWithCreatorFromDb.url
        this.youtubeId = courseWithCreatorFromDb.youtubeId
        this.createdAt = courseWithCreatorFromDb.createdAt
        this.creator = courseWithCreatorFromDb.creator ? { username: courseWithCreatorFromDb.creator.username } : null
    }
}