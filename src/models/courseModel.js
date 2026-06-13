import mongoose from 'mongoose';

import { extractYoutubeId } from '../utils/extractYoutubeId.js';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Título é obrigatório'],
        trim: true,
        minlength: [1, 'Título não deve ser vazio']
    },
    description: {
        type: String,
        trim: true,
        minlength: [1, 'Descrição não deve ser vazia']
    },
    knowledgeArea: {
        type: String,
        required: [true, 'Área do conhecimento é obrigatória'],
        trim: true,
        minlength: [1, 'Área do conhecimento não deve ser vazia']
    },
    url: {
        type: String,
        required: [true, 'URL é obrigatória'],
        trim: true,
        minlength: [1, 'URL não deve ser vazia'],
        validate: {
            validator: url => extractYoutubeId(url) !== null,
            message: 'URL do YouTube inválida'
        }
    },
    youtubeId: {
        type: String,
        required: [true, 'ID do YouTube é obrigatório'],
        trim: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Criador é obrigatório']
    }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
