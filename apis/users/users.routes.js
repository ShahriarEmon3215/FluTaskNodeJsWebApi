const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
  getUserByEmail,
} = require("./users.controller.js");
const router = require("express").Router();
const checkLogin = require("../../middlewares/checkLogin.js");

router.post("/createUser", checkLogin, createUser);
router.get("/getAllUsers", checkLogin, getUsers);
router.get("/getUserById/:id", checkLogin, getUserById);
router.post("/getUserByEmail", checkLogin, getUserByEmail);
router.post("/updateUser", checkLogin, updateUser);
router.post("/deleteUser", checkLogin, deleteUser);
router.post("/login", login);

module.exports = router;
