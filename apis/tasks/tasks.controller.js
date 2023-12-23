const {
  create,
  getTasks,
  updateTask,
  updateTaskCollaboration,
} = require("./tasks.services.js");

module.exports = {
  createTask: (req, res) => {
    create(req.body, (error, result) => {
      if (error) {
        return res
          .status(422)
          .json({ success: false, message: error.sqlMessage });
      }
      return res.status(200).json({
        success: true,
        message: "Task created Successfully",
        result: {
          project: req.body.task_name,
          id: result.insertId,
        },
      });
    });
  },

  getTasksByProjectId: (req, res) => {
    var pId = req.body.project_id;
    getTasks(pId, (error, result) => {
      if (error) {
        return res.json({
          success: false,
          message: "Someting went wrong!",
        });
      }
      if (!result) {
        return res.json({
          success: false,
          message: "Empty data",
        });
      }
      return res.json({
        success: true,
        message: "Data loaded successfully",
        result: result,
      });
    });
  },

  updateTaskStatus: (req, res) => {
    var tId = req.params.id;
    var body = req.body;
    updateTask(tId, body, (error, result) => {
      if (error) {
        return res.json({
          success: false,
          message: "Someting went wrong!",
        });
      }

      return res.json({
        success: true,
        message: "Updated",
      });
    });
  },

  updateTaskCollaboration: (req, res) => {
    var tId = req.params.id;
    var body = req.body;
    updateTaskCollaboration(tId, body, (error, result) => {
      if (error) {
        return res.json({
          success: false,
          message: "Someting went wrong!",
        });
      }

      return res.json({
        success: true,
        message: "Updated",
      });
    });
  },
};
