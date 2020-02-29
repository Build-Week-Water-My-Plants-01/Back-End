exports.seed = function(knex) {
  return knex("plants").insert([
    { name: "Chinese Money Plant", species_id: 5 },
    { name: "Guiana Chestnut", species_id: 4 },
    { name: "Fiddle Leaf Fig", species_id: 6 },
    { name: "Asparagus Fern", species_id: 1 },
    { name: "Chinese Evergreen", species_id: 7 },
    { name: "Fire-Cracker Flower", species_id: 1 },
    { name: "Yucca Flowers", species_id: 1 },
    { name: "Red Hot Poker Aloe", species_id: 2 },
    { name: "Affinis", species_id: 2 },
    { name: "Milletia pinnata", species_id: 3 },
    { name: "Kudzu", species_id: 3 },
    { name: "Least Mallow", species_id: 4 },
    { name: "Peace Lily", species_id: 7 },
    { name: "Snake Lily", species_id: 7 },
    { name: "Friendship Plant", species_id: 5 }
  ]);
};
