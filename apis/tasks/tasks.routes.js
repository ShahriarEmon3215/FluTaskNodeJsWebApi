const { createTask, getTasksByProjectId } = require('./tasks.controller.js')
const router = require('express').Router()

router.post('/createTask', createTask)
router.post('/getTasks', getTasksByProjectId)

module.exports = router