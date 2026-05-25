export class UserResponseDto {
    constructor(userFromDb) {
        this.id = userFromDb.id
        this.firstName = userFromDb.firstName
        this.lastName = userFromDb.lastName
        this.email = userFromDb.email
        // password foi omitido
        // role foi omitido
        this.createdAt = userFromDb.createdAt
    }
}
