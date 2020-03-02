const db = require("../../data/db-config.js");

function find() {
  return db('plants')
}

function findById(id) {
  return db('plants').where({ user_Id : id })
}

module.exports = {
  find,
  findById
}

