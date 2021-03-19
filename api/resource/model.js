// build your `Resource` model here
const db = require("../../data/dbConfig");

const get = () => {
  return db("resources");
};

const add = (resource) => {
  return db("resources")
  .insert(resource, "id");
};

module.exports = {
  get,
  add,
};
