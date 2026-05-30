import { getDB } from '../config/database.js';
import { ObjectId } from 'mongodb';

class UserRepository {

    constructor() {
        this.collection = getDB().collection('Users');
    }

    async create(createUserData) {
        return await this.collection.insertOne(createUserData);
    }

    async findAll(){
        return await this.collection.find({}).toArray();
    }

    async findById(id) {
        return await this.collection.findOne({ _id: new ObjectId(id) });
    }

    async findByIds(ids) {
        const objectIds = ids.map(id => new ObjectId(id));
        return await this.collection.find({ _id: { $in: objectIds } }).toArray();
    }

    async findByEmail(email) {
        return await this.collection.findOne({ email: email });
    }

    async replace(id, replaceUserData) {
        return await this.collection.replaceOne(
            { _id: new ObjectId(id) },
            replaceUserData
        );
    }

    async update(id, updateUserData) {
        return await this.collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateUserData }
        );
    }

    async delete(id) {
        return await this.collection.deleteOne({ _id: new ObjectId(id) });
    }
}

export default new UserRepository();
