const { createUser , getUsers, getUserById, updateUser, deleteUser, login, getUserByEmail} = require('./users.controller.js')
const router = require('express').Router()

router.post('/createUser', createUser)
router.get('/getAllUsers', getUsers)
router.get('/getUserById/:id', getUserById)
router.post('/getUserByEmail', getUserByEmail)
router.post('/updateUser', updateUser)
router.post('/deleteUser', deleteUser)
router.post('/login', login)

module.exports = router