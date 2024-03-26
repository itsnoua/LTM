const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
      title: String,
      description: String,
      status: String,
      dueDate: String,
})

const taskModel = mongoose.model('task',taskSchema)
module.exports = taskModel
