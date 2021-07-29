const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const app = express()

const db = require('./db')
const toDoList = require('./models/ToDoItem')
db.sync()

app.use(cors({ origin:true }))
app.use(express.json())
app.use(routes)
app.use(errorHandler)

module.exports = app