// build your `Task` model here
const db = require("../../data/dbConfig.js");

const get = async () => {
  const tasks = await db("tasks");
  const projects = await db("projects");

  return tasks.map((task) => {
    const project = projects.find((p) => p.project_id === task.project_id);
    if (!project) {
      return task;
    }
    return {
      ...task,
      project_name: project.project_name,
      project_description: project.project_description,
    };
  });
};

const add = (task) => {
  return db("tasks").insert(task, "id");
};

module.exports = {
  get,
  add,
};
