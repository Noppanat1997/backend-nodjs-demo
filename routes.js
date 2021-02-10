const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/tasks", (req, res) => controllers.getTasksController(req, res));

router.post("/task", (req, res) => controllers.createTaskController(req, res));

router.put("/task", (req, res) => controllers.updateTaskController(req, res));

router.delete("/task/:id", (req, res) =>
  controllers.deleteTaskController(req, res)
);

module.exports = router;
