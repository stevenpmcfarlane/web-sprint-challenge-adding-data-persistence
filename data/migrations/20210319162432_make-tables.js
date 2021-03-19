exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 128).notNullable();
      tbl.text("project_description");
      tbl.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name", 128).notNullable().unique();
      tbl.text("resource_description");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.text("task_description").notNullable();
      tbl.text("task_notes");
      tbl.boolean("task_completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("project_resource_id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};

// A project is what needs to be done and is stored in a projects table with the following columns:

// project_id - primary key
// project_name - required
// project_description - optional
// project_completed - the database defaults it to false (integer 0) if not provided

// A resource is anything needed to complete a project and is stored in a resources table with the following columns:

// resource_id - primary key
// resource_name - required and unique
// resource_description - optional

// A task is one of the steps needed to complete a project and is stored in a tasks table with the following columns:

// task_id - primary key
// task_description - required
// task_notes - optional
// task_completed - the database defaults it to false (integer 0) if not provided
// project_id - required and points to an actual project_id in the projects table

// A resource assignment connects a resource and a project, and is stored in a project_resources table. You decide what columns to use.
