// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");


const router = express.Router();

router.get("/", (req, res) => {
  Project.get()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;
  Project.add(project)
    .then((id) => {
      res.status(201).json({ created: id });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new projects" });
    });
});

module.exports = router;
// [POST] /api/projects

//     Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
//     Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

// [GET] /api/projects

//     Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
//     Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]
