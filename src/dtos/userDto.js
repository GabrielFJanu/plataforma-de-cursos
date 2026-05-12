export class UserResponseDto {
    constructor(userFromDb) {
        this.id = userFromDb.id
        this.firstname = userFromDb.firstname
        this.lastname = userFromDb.lastname
        this.email = userFromDb.email
        this.createdAt = userFromDb.createdAt
    }
}