import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username é obrigatório'],
        trim: true,
        minlength: [3, 'Username deve ter no mínimo 3 caracteres'],
        maxlength: [30, 'Username deve ter no máximo 30 caracteres'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password é obrigatória'],
        minlength: [8, 'Password deve ter no mínimo 8 caracteres']
    },
    role: {
        type: String,
        required: [true, 'Role é obrigatório'],
        enum: {
            values: ['user', 'admin'],
            message: 'Role deve ser user ou admin'
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
