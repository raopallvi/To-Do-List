const mongoose = require('mongoose');

/* Task Schema for individual Task */
const taskSchema = new mongoose.Schema(
    {
        Description: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        isDone: {
            type: Boolean,
            required: true
        }
    }
)

/* Collection Name in mongodb */
const Task = mongoose.model('Task' , taskSchema);
module.exports = Task;


