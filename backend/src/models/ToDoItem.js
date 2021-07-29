const { DataTypes } = require('sequelize')
const seq = require('../db')

module.exports = seq.define('toDoItem', {
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type:DataTypes.ENUM(['pending','done']),
        allowNull: false,
        defaultValue:'pending'
    },
    rollbackStatusCounter:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    }
},{})
