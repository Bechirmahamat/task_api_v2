const express = require('express')
const router = express.Router()

const {
    updateTask,
    getTasks,
    getTask,
    deleteTask,
    createTask,
} = require('../controllers/taskController')

router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
