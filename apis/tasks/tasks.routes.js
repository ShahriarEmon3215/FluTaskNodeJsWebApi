const { createTask, getTasksByProjectId, updateTaskStatus } = require('./tasks.controller.js')
const router = require('express').Router()

router.post('/createTask', createTask)
router.post('/getTasks', getTasksByProjectId)
router.post('/updateTaskStatus/:id', updateTaskStatus)

module.exports = router