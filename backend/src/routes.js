const { Router } = require('express')
const routes = Router()

// controllers available
const toDoList = require('./controllers/toDoList.controller')

// middlewares
const { toDoListValidation, codeValidation } = require('./middlewares/validation')
const { supervisorPermission } = require('./middlewares/authorization')

// routes
routes.get('/lista', toDoList.getAll)
routes.post('/lista', toDoListValidation, toDoList.create)
routes.put('/lista/completar/:id', toDoList.completeItem)
routes.put('/lista/voltar/:id', codeValidation, supervisorPermission, toDoList.rollbackItem)
routes.post('/lista/fatos', toDoList.getDogFacts)

module.exports = routes