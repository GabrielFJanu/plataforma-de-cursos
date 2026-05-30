import { getDB } from '../config/database.js';
import { ObjectId } from 'mongodb';

class UserRepository {

    getCollection() {
        return getDB().collection('Users');
    }

    async create(createUserData) {
        return await this.getCollection().insertOne(createUserData);
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

    async findByEmail(email) {
        return await this.getCollection().findOne({ email: email });
    }

    async replace(id, replaceUserData) {
        return await this.getCollection().replaceOne(
            { _id: new ObjectId(id) },
            replaceUserData
        );
    }

    async update(id, updateUserData) {
        return await this.getCollection().updateOne(
            { _id: new ObjectId(id) },
            { $set: updateUserData }
        );
    }

    async delete(id) {
        return await this.getCollection().deleteOne({ _id: new ObjectId(id) });
    }
}

export default new UserRepository();