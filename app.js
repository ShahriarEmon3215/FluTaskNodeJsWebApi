const express = require("express");
const app = express();
const userRouter = require("./apis/users/users.routes.js");
const projectRouter = require("./apis/projects/projects.routes.js");
const taskRouter = require("./apis/tasks/tasks.routes.js");
const collaborationRouter = require("./apis/collaboration/collaboration.routes.js");

// middlewares
require("dotenv").config();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);
app.use("/api/task", taskRouter);
app.use("/api/collaboration", collaborationRouter);

// default error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({
    success: false,
    message: err,
  });
};
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server is up and runnng at port : ", process.env.PORT);
});
