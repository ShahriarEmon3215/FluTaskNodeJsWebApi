const { createTask, getTasksByProjectId, updateTaskStatus, updateTaskCollaboration } = require('./tasks.controller.js')
const router = require('express').Router()

router.post('/createTask', createTask)
router.post('/getTasks', getTasksByProjectId)
router.post('/updateTaskStatus/:id', updateTaskStatus)
router.post('/updateTaskCollatoraion/:id', updateTaskCollaboration)

module.exports = router