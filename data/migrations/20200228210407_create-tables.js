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
        .text("nickname", 255)
        .notNullable()
        .index();

      tbl.text("h2o_frequency").notNullable();
      tbl.text("image");
      tbl
        .text("species_name")
        .unsigned()
        .references("name")
        .inTable("species")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("plants")
    .dropTableIfExists("species")
    .dropTableIfExists("users");
};
