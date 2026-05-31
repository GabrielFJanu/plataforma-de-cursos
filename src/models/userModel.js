import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username Ã© obrigatÃ³rio'],
        trim: true,
        minlength: [3, 'Username deve ter no mÃ­nimo 3 caracteres'],
        maxlength: [30, 'Username deve ter no mÃ¡ximo 30 caracteres'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password Ã© obrigatÃ³ria'],
        minlength: [8, 'Password deve ter no mÃ­nimo 8 caracteres']
    },
    role: {
        type: String,
        required: [true, 'Role Ã© obrigatÃ³rio'],
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
