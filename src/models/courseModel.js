import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Titulo e obrigatorio'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    knowledgeArea: {
        type: String,
        required: [true, 'Area do conhecimento e obrigatoria'],
        trim: true
    },
    url: {
        type: String,
        required: [true, 'URL e obrigatoria'],
        trim: true
    },
    youtubeId: {
        type: String,
        required: [true, 'ID do YouTube e obrigatorio'],
        trim: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Criador e obrigatorio']
    }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema, 'Courses');

export default Course;