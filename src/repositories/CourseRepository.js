import { getDB } from '../config/database.js';
import { ObjectId } from 'mongodb';

class CourseRepository {

    constructor() {
        this.collection = getDB().collection('Courses');
    }

    async create(createCourseData) {
        return await this.collection.insertOne(createCourseData);
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

    async findByCreatorId(creatorId) {
        return await this.collection.find({ creatorId: creatorId }).toArray();
    }

    async replace(id, replaceCourseData) {
        return await this.collection.replaceOne(
            { _id: new ObjectId(id) },
            replaceCourseData
        );
    }

    async update(id, updateCourseData) {
        return await this.collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateCourseData }
        );
    }

    async delete(id) {
        return await this.collection.deleteOne({ _id: new ObjectId(id) });
    }
}

export default new CourseRepository();
