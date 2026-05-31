import Course from '../models/courseModel.js';

class CourseRepository {
    async create(createCourseData) {
        return await Course.create(createCourseData);
    }

    async findAll(){
        return await Course.find();
    }

    async findById(id) {
        return await Course.findById(id);
    }

    async findByIds(ids) {
        return await Course.find({ _id: { $in: ids }});
    }

    async findByCreator(creator) {
        return await Course.find({ creator: creator });
    }

    async replace(id, replaceCourseData) {
        return await Course.findByIdAndReplace(id, replaceCourseData);
    }

    async update(id, updateCourseData) {
        return await Course.findByIdAndUpdate(id, updateCourseData, { new: true });
    }

    async delete(id) {
        return await Course.findByIdAndDelete(id);
    }
}

export default new CourseRepository();