const {
  createCollaboration,
  updateCollaboration,
  getCollaborationProjectListByUserId,
  getCollaborationUserListByProjectId,
} = require("./collaboration.controller.js");
const router = require("express").Router();
const checkLogin = require("../../middlewares/checkLogin.js");

router.post("/createCollaboration", checkLogin, createCollaboration);
router.post("/updateCollaboration/:id", checkLogin, updateCollaboration);
router.post(
  "/getCollaborationProjects",
  checkLogin,
  getCollaborationProjectListByUserId
);
router.post(
  "/getCollaboratorsByProjectId",
  checkLogin,
  getCollaborationUserListByProjectId
);

module.exports = router;
