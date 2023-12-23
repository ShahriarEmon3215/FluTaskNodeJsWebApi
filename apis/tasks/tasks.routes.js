const { createTask, getTasksByProjectId, updateTaskStatus, updateTaskCollaboration } = require('./tasks.controller.js')
const router = require('express').Router()
const checkLogin = require("../../middlewares/checkLogin.js");

router.post("/createTask", checkLogin, createTask);
router.post("/getTasks", checkLogin, getTasksByProjectId);
router.post("/updateTaskStatus/:id", checkLogin, updateTaskStatus);
router.post("/updateTaskCollatoraion/:id", checkLogin, updateTaskCollaboration);

module.exports = router