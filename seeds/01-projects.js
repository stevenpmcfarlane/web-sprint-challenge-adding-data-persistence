
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_id: 1,
          project_name: "testing react 2",
          project_description: "this is the project for testing my react code",
          project_completed: true,
        },
        {
          project_id: 2,
          project_name: "testing redux",
          project_description: "this is the project for testing my redux code",
          project_completed: false,
        },
        { project_id: 3, project_name: "testing node.js", project_completed: false,},
      ]);
    });
};
