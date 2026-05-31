export class UserResponseDto {
    constructor(userFromDb) {
        this._id = userFromDb._id.toString()
        this.username = userFromDb.username
        // password foi omitido
        // role foi omitido
        this.createdAt = userFromDb.createdAt
        this.updatedAt = userFromDb.updatedAt;
    }
}

