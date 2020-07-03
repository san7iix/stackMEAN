const { model, Schema } = require('mongoose');

const courseSchema = new Schema({
    name: { type: String, required: true },
    schedule: { type: String, required: true },
    dateIni: { type: String, required: true },
    dateFin: { type: String, required: true },
    studentsAssocciated: { type: Number, required: false }
});

module.exports = model('Course', courseSchema);