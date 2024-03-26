<<<<<<< HEAD
const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
      title: String,
      description: String,
      status: String,
      dueDate: String,
})

const taskModel = mongoose.model('task',taskSchema)
module.exports = taskModel
=======
const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
      title: String,
      description: String,
      status: String,
      dueDate: String,
})

const taskModel = mongoose.model('task',taskSchema)
module.exports = taskModel
>>>>>>> 7e248a7d77829720cc16820b0b2b5863d8160275
