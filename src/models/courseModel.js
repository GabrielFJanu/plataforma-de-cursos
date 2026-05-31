import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'TÃ­tulo Ã© obrigatÃ³rio'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    knowledgeArea: {
        type: String,
        required: [true, 'Ãrea do conhecimento Ã© obrigatÃ³ria'],
        trim: true
    },
    url: {
        type: String,
        required: [true, 'URL Ã© obrigatÃ³ria'],
        trim: true
    },
    youtubeId: {
        type: String,
        required: [true, 'ID do YouTube Ã© obrigatÃ³rio'],
        trim: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Criador Ã© obrigatÃ³rio']
    }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema, 'Courses');

export default Course;
