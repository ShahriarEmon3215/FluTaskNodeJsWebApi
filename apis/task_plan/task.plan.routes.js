const { createTaskPlan, taskTransaction } = require('./task.plan.controller.js')
const router = require('express').Router()

router.post('/createTaskPlan', createTaskPlan)
router.post('/updateStatus', taskTransaction)

module.exports = router