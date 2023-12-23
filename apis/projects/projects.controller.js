const { create, getProjectsByUserId } = require("./projects.services.js");
const jwt = require("jsonwebtoken");

module.exports = {
  createProject: (req, res) => {
    create(req.body, (error, result) => {
      if (error) {
        return res
          .status(422)
          .json({ success: false, message: error.sqlMessage });
      }
      return res.status(200).json({
        success: true,
        message: "Project created Successfully",
        result: {
          project: req.body.project_name,
          id: result.insertId,
        },
      });
    });
  },

  getProjectsListByUserId: (req, res) => {
    const id = req.params.id;
    getProjectsByUserId(id, (error, result) => {
      if (error) {
        return res.status(401).json({
          success: false,
          message: error,
        });
      }
      // if (!result) {
      //     return res.json({
      //         sucess: false,
      //         message: "Empty project list!",
      //     })
      // }
      return res.json({
        success: true,
        message: "Data loaded successfully",
        result: result,
      });
    });
  },
};
