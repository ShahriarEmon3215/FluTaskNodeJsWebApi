const { createProject, getProjectsListByUserId } = require('./projects.controller.js')
const router = require('express').Router()

router.post('/createProject', createProject)
router.get('/getProjectsByUserId/:id', getProjectsListByUserId)

module.exports = router