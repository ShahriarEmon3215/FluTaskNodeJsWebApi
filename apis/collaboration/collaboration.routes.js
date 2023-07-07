const { createCollaboration, updateCollaboration, getCollaboratorsListByUserIdAndProjectId } = require('./collaboration.controller.js')
const router = require('express').Router()

router.post('/createCollaboration', createCollaboration)
router.post('/updateCollaboration/:id', updateCollaboration)
router.post('/getCollaboration', getCollaboratorsListByUserIdAndProjectId)

module.exports = router