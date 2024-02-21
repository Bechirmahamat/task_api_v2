// const express = require('express')
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        minLength: [4, 'You must provide 4 characters'],
        maxLength: [20, 'can not be more than 20 characters long'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)
