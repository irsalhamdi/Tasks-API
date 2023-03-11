const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true,
        maxlength: [20, `Name can't be more than 20 characters`]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', schema);

module.exports = Task;