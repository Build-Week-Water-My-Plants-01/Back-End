const db = require("../../data/db-config.js");

// model to get all the plants related to user
function getPlants(id) {
  return db("plants as p")
    .join("users as u", "p.user_id", "u.id")
    .join("species as s", "p.species_name", "s.name")
    .select(
      "p.id",
      "p.nickname",
      "p.h2o_frequency as frequency",
      "p.image",
      "p.species_name"
    )
    .where({ "p.user_id": id });
}

// get user that was logged in
function getUserById(id) {
  return db("users")
    .select("username", "phone_number")
    .where({ id })
    .first();
}

// get specific plant by user
function getPlantById(plantid) {
  return db("plants")
    .where({ id: plantid })
    .first();
}

// add plant to user data
function addPlant(plantData) {
  return db("plants")
    .insert(plantData, "id")
    .then(ids => {
      const [id] = ids;
      return db("plants")
        .where({ id })
        .first()
        .then(obj => {
          return getPlants(obj.user_id);
        });
    });
}

// update plant
function updatePlant(plantData, plantid) {
  return db("plants")
    .where({ id: plantid })
    .update(plantData)
    .then(success => {
      return getPlantById(plantid);
    });
}

// delete plant
function removePlant(plantid) {
  return db("plants")
    .where({ id: plantid })
    .del();
}

// used to verify if species provided by user is already in database, if not, addSpecies model will add it
function getSpecies(filter) {
  return db("species")
    .where(filter)
    .first();
}

// add species to database
function addSpecies(species) {
  return db("species")
    .insert(species, "id")
    .then(ids => {
      const [id] = ids;
      return db("species")
        .where({ id })
        .first();
    });
}

module.exports = {
  getPlants,
  getUserById,
  getPlantById,
  removePlant,
  getSpecies,
  addSpecies,
  addPlant,
  updatePlant
};
