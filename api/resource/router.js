// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Resource.get()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const resource = req.body;
  Resource.add(resource)
    .then((id) => {
      res.status(201).json({ created: id });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resources" });
    });
});

module.exports = router;
// [POST] /api/resources

//     Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}

// [GET] /api/resources

//     Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
