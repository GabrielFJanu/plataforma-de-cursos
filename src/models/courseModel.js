import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Título é obrigatório'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    knowledgeArea: {
        type: String,
        required: [true, 'Área do conhecimento é obrigatória'],
        trim: true
    },
    url: {
        type: String,
        required: [true, 'URL é obrigatória'],
        trim: true
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

const Course = mongoose.model('Course', courseSchema, 'Courses');

export default Course;