import { getDB } from '../config/database.js';
import { ObjectId } from 'mongodb';

class CourseRepository {

    getCollection() {
        return getDB().collection('Courses');
    }

    async create(createCourseData) {
        return await this.getCollection().insertOne(createCourseData);
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
        return await this.getCollection().replaceOne(
            { _id: new ObjectId(id) },
            replaceCourseData
        );
    }

    async update(id, updateCourseData) {
        return await this.getCollection().updateOne(
            { _id: new ObjectId(id) },
            { $set: updateCourseData }
        );
    }

    async delete(id) {
        return await this.getCollection().deleteOne({ _id: new ObjectId(id) });
    }
}

export default new CourseRepository();