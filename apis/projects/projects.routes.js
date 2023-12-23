const { createProject, getProjectsListByUserId } = require('./projects.controller.js')
const router = require('express').Router()
const checkLogin = require("../../middlewares/checkLogin.js");

router.post("/createProject", checkLogin, createProject);
router.get("/getProjectsByUserId/:id", checkLogin, getProjectsListByUserId);

module.exports = router