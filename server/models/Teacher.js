/*
This is the schema that will create a teacher. A teacher is someone who is allowed to create a game that anyone can play
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isTeacher: {
        type: Boolean,
        default: true
    },
    completedGames: [Schema.Types.ObjectId],
    currentGames: [Schema.Types.ObjectId],
})

const Teacher = new mongoose.model("Teachers", TeacherSchema);

module.exports = Teacher;