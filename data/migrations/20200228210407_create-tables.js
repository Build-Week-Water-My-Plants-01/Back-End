exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      //   users table
      tbl.increments();
      tbl
        .text("username", 255)
        .notNullable()
        .unique()
        .index();
      tbl.text("password").notNullable();
      tbl.text("phone_number").notNullable();
    })

    .createTable("species", tbl => {
      // species table
      tbl.increments();
      tbl
        .text("name")
        .notNullable()
        .unique();
    })

    .createTable("plants", tbl => {
      // plants table
      tbl.increments();
      tbl
        .text("name", 255)
        .notNullable()
        .unique()
        .index();
      tbl
        .integer("species_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("species")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("user_plants", tbl => {
      //   user_plants table
      tbl.primary(["user_id", "plant_id"]);
      tbl.text("nickname", 255).notNullable();
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("plant_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("plants")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.text("h2o_frequency", 255).notNullable();
      tbl.text("image");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("user_plants")
    .dropTableIfExists("plants")
    .dropTableIfExists("species")
    .dropTableIfExists("users");
};
