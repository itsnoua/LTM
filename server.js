const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
mongoose.connect('mongodb://localhost:27017/ltm').then(() =>{
    app.listen(PORT, console.log(`lisning on port ${PORT}`))
}).catch(err => console.log(err))

app.use(express.json())

const taskRoute = require('./routes/taskRoutes')

app.use('/task', taskRoute)
