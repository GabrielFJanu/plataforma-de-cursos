import User from '../models/userModel.js';

class UserRepository {
    async create(createUserData) {
        return await User.create(createUserData);
    }

    async findAll(){
        return await User.find();
    }

    async findById(id) {
        return await User.findById(id);
    }

    async findByUsername(username) {
        return await User.findOne({ username: username });
    }

    async replace(id, replaceUserData) {
        return await User.findOneAndReplace(
            { _id: id },
            replaceUserData,
            {
                new: true,
                runValidators: true
            }
        );
    }

    async update(id, updateUserData) {
        return await User.findByIdAndUpdate(id, updateUserData, { new: true, runValidators: true });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserRepository();