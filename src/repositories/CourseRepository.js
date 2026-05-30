import { getDB } from '../config/database.js';
import { ObjectId } from 'mongodb';

class CourseRepository {

    getCollection() {
        return getDB().collection('Courses');
    }

    async create(createCourseData) {
        const result = await this.getCollection().insertOne(createCourseData);
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

    async findByCreatorId(creatorId) {
        return await this.getCollection().find({ creatorId: creatorId }).toArray();
    }

    async replace(id, replaceCourseData) {
        const result = await this.getCollection().replaceOne(
            { _id: new ObjectId(id) },
            replaceCourseData
        );
        return await this.findById(result.insertedId);
    }

    async update(id, updateCourseData) {
        const result = await this.getCollection().updateOne(
            { _id: new ObjectId(id) },
            { $set: updateCourseData }
        );
        return await this.findById(result.insertedId);
    }

    async delete(id) {
        return await this.getCollection().deleteOne({ _id: new ObjectId(id) });
    }
}

export default new CourseRepository();