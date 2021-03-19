// build your `Project` model here
const db = require("../../data/dbConfig");

const get = () => {
  return db("projects");
};

const add = (project) => {
  return db("projects")
  .insert(project, "id");
};

module.exports = {
  get,
  add,
};
