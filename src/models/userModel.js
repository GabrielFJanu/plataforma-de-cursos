import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username e obrigatorio'],
        trim: true,
        minlength: [3, 'Username deve ter no minimo 3 caracteres'],
        maxlength: [30, 'Username deve ter no maximo 30 caracteres'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password e obrigatoria'],
        minlength: [8, 'Password deve ter no minimo 8 caracteres']
    },
    role: {
        type: String,
        required: [true, 'Role e obrigatorio'],
        enum: {
            values: ['user', 'admin'],
            message: 'Role deve ser user ou admin'
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema, 'Users');

export default User;