import Course from '../models/courseModel.js';

class CourseRepository {
    async create(createCourseData) {
        const course = await Course.create(createCourseData);
        return await course.populate('creator');
    }

    async findAll(){
        return await Course.find().populate('creator');
    }

    async findById(id) {
        return await Course.findById(id).populate('creator');
    }

    async findByCreator(creator) {
        return await Course.find({ creator: creator }).populate('creator');
    }

    async replace(id, replaceCourseData) {
        return await Course.findOneAndReplace(
            { _id: id },
            replaceCourseData,
            {
                new: true,
                runValidators: true
            }
        ).populate('creator');
    }

    async update(id, updateCourseData) {
        return await Course.findByIdAndUpdate(id, updateCourseData, { new: true, runValidators: true }).populate('creator');
    }

    async delete(id) {
        return await Course.findByIdAndDelete(id);
    }
}

export default new CourseRepository();