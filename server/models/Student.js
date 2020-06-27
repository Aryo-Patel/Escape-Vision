const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isTeacher: {
        type: Boolean,
        default: false
    },
    playedGames: [Schema.Types.ObjectId],
    currentGames: [Schema.Types.ObjectId],
})

const Student = new mongoose.model("Students", StudentSchema);

module.exports = Student;