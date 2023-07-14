const { createCollaboration, updateCollaboration, getCollaborationProjectListByUserId , getCollaborationUserListByProjectId} = require('./collaboration.controller.js')
const router = require('express').Router()

router.post('/createCollaboration', createCollaboration) 
router.post('/updateCollaboration/:id', updateCollaboration) 
router.post('/getCollaborationProjects', getCollaborationProjectListByUserId) 
router.post('/getCollaboratorsByProjectId', getCollaborationUserListByProjectId) 

module.exports = router