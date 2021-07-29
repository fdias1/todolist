const ToDoItem = require('../models/ToDoItem')
const { BadRequest } = require('../utils/customErrors')
const rollbackLimit = process.env.ROLLBACK_LIMIT || 2

module.exports = {
    create: async ({description, name, email}) => {
        return (
            await ToDoItem.create({
                description, 
                name, 
                email
            })
        ).get()
    },

    getAll: async () => {
        return await ToDoItem.findAll()
    },

    completeItem: async (id) => {
        const item = await ToDoItem.findByPk(id)
        if(item.status === 'done'){
            throw new BadRequest('item já marcado como completo')
        } else {
            item.status = 'done'
            return await item.save() 
        }
    },

    rollbackItem: async (id) => {
        const item = await ToDoItem.findByPk(id)
        if(item.status === 'pending') throw new BadRequest('item já marcado como pendente')

        if (item.rollbackStatusCounter >= rollbackLimit) {
            throw new BadRequest('limite máximo de voltas já atingido para este item')
        } else {
            item.status = 'pending'
            item.rollbackStatusCounter = item.rollbackStatusCounter + 1
            return await item.save() 
        }
    }
}