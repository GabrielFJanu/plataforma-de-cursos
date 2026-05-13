import db from '../database/database.js';
import { v4 as uuidv4 } from 'uuid';

class UserRepository {
    static async findAll(){
        await db.read();

        const users = db.data.users;
        return users;
    }

    static async findById(id) {
        await db.read();

        const user = db.data.users.find(user => user.id == id);
        return user;
    }

    static async findByIds(ids) {
        await db.read();

        const users = db.data.users.filter(user => ids.includes(user.id));
        return users;
    }

    static async create(createUserData) {
        await db.read();

        const newUser = {
            id: uuidv4(),
            ...createUserData,
            createdAt: new Date().toISOString()
        };

        db.data.users.push(newUser);

        await db.write();

        return newUser;
    }

    static async update(id, updateUserData) {
        await db.read();

        const user = db.data.users.find(user => user.id == id);

        if (!user) {
            return null;
        }

        Object.assign(user, updateUserData);

        await db.write();

        return user;
    }

    static async delete(id) {
        await db.read();

        db.data.users = db.data.users.filter(user => user.id != id);

        await db.write();
    }
}

export default UserRepository