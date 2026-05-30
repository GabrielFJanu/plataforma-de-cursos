export class UserResponseDto {
    constructor(userFromDb) {
        this.id = userFromDb.id
        this.username = userFromDb.username
        // password foi omitido
        // role foi omitido
        this.createdAt = userFromDb.createdAt
    }
}
