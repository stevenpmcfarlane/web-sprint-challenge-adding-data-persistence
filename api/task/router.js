// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");


const router = express.Router();

router.get("/", (req, res) => {
  Task.get()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const task = req.body;
  Task.add(task)
    .then((id) => {
      res.status(201).json({ created: id }); 
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new tasks" });
    });
});



module.exports = router;

// [POST] /api/tasks

//     Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
//     Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}

// [GET] /api/tasks

//     Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
//     Each task must include project_name and project_description
//     Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]

