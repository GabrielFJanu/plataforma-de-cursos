export class CourseResponseDto {
    constructor(courseFromDb) {
        this._id = courseFromDb._id.toString();
        this.title = courseFromDb.title;
        this.description = courseFromDb.description;
        this.knowledgeArea = courseFromDb.knowledgeArea;
        this.url = courseFromDb.url;
        this.youtubeId = courseFromDb.youtubeId;
        this.createdAt = courseFromDb.createdAt;

        this.creator = {
            _id = courseFromDb.creator._id.toString(),
            username: courseFromDb.creator.username
        };
    }
}