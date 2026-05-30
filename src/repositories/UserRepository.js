import { getDB } from '../config/database.js';
import { ObjectId } from 'mongodb';

class UserRepository {

    getCollection() {
        return getDB().collection('Users');
    }

    async create(createUserData) {
        const userToCreate = {
            ...createUserData,
            createdAt: new Date().toISOString()
        };

        const result = await this.getCollection().insertOne(userToCreate);
        return await this.findById(result.insertedId);
    }

    async findAll(){
        return await this.getCollection().find({}).toArray();
    }

    async findById(id) {
        return await this.getCollection().findOne({ _id: new ObjectId(id) });
    }

    async findByIds(ids) {
        const objectIds = ids.map(id => new ObjectId(id));
        return await this.getCollection().find({ _id: { $in: objectIds } }).toArray();
    }

    async findByUsername(username) {
        return await this.getCollection().findOne({ username: username });
    }

    async replace(id, replaceUserData) {
        const currentUser = await this.findById(id);

        if (!currentUser) {
            return null;
        }

        await this.getCollection().replaceOne(
            { _id: new ObjectId(id) },
            {
                ...replaceUserData,
                createdAt: currentUser.createdAt
            }
        );

        return await this.findById(id);
    }

    async update(id, updateUserData) {
        const result = await this.getCollection().updateOne(
            { _id: new ObjectId(id) },
            { $set: updateUserData }
        );

        if (result.matchedCount === 0) {
            return null;
        }

        return await this.findById(id);
    }

    async delete(id) {
        return await this.getCollection().deleteOne({ _id: new ObjectId(id) });
    }
}

export default new UserRepository();