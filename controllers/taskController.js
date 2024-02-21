const asyncWrapper = require('../middlewares/asyncWrapper')
const Task = require('../models/TaskModal')

const createTask = asyncWrapper(async (req, res) => {
    const response = await Task.create({ name: req.body.name })
    res.status(201).json({ success: true, data: response })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    const response = await Task.findOneAndDelete({ _id: req.params.id })
    if (!response) {
        return res.status(404).json({
            success: false,
            msg: `no items with id "${id}" found`,
        })
    }
    res.json({ success: true, data: id })
})

const updateTask = asyncWrapper(async (req, res) => {
    const id = req.params.id

    const response = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!response) {
        return res.status(404).json({
            success: false,
            msg: `no items with id "${id}" found`,
        })
    }
    res.json({ success: true, data: response })
})

const getTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    const response = await Task.findById({ _id: id })
    if (!response) {
        return res.status(404).json({
            success: false,
            msg: `no items with id "${id}" found`,
        })
    }
    res.json({ success: true, data: response })
})

const getTasks = asyncWrapper(async (req, res) => {
    const response = await Task.find({})
    if (!response) {
        return res.status(404).json({
            success: false,
            msg: `no items  found`,
        })
    }
    res.json({ success: true, data: response })
})

module.exports = { updateTask, getTasks, getTask, deleteTask, createTask }
