exports.seed = function(knex) {
  return knex("plants").insert([
    {
      nickname: "floyd",
      species_name: "pilea",
      h2o_frequency: "twice a day",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/618qjKv5aoL._AC_SX355_.jpg",
      user_id: 1
    },
    {
      nickname: "morris",
      species_name: "malvaceae",
      h2o_frequency: "once a week",
      image:
        "https://cdn.webshopapp.com/shops/30495/files/265777268/pachira-aquatica-p-24-cm.jpg",
      user_id: 3
    },
    {
      nickname: "fig newton",
      species_name: "fig trees",
      h2o_frequency: "once a day",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61POinrSaZL._AC_SL1048_.jpg",
      user_id: 3
    },
    {
      nickname: "anfernie",
      species_name: "asparagaceae",
      h2o_frequency: "never",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71NP3gTJmeL._SX425_.jpg",
      user_id: 2
    },
    {
      nickname: "asian evergreen",
      species_name: "araceae",
      h2o_frequency: "three times a day",
      image: null,
      user_id: 1
    },
    {
      nickname: "loudy",
      species_name: "asparagaceae",
      h2o_frequency: "once a day",
      image: null,
      user_id: 3
    },
    {
      nickname: "yucci",
      species_name: "asparagaceae",
      h2o_frequency: "once a week",
      image: null,
      user_id: 2
    },
    {
      nickname: "chili",
      species_name: "aloe",
      h2o_frequency: "once a day",
      image: null,
      user_id: 2
    },
    {
      nickname: "affini",
      species_name: "aloe",
      h2o_frequency: "never",
      image: null,
      user_id: 3
    },
    {
      nickname: "millete",
      species_name: "fabaceae",
      h2o_frequency: "twice a week",
      image: null,
      user_id: 1
    },
    {
      nickname: "kudzu",
      species_name: "fabaceae",
      h2o_frequency: "once a day",
      image: null,
      user_id: 1
    },
    {
      nickname: "marsh",
      species_name: "malvaceae",
      h2o_frequency: "three times a month",
      image: null,
      user_id: 3
    },
    {
      nickname: "Peace Lily",
      species_name: "araceae",
      h2o_frequency: "three times a day",
      image:
        "https://i.etsystatic.com/15265690/r/il/9c7e6c/1211862072/il_570xN.1211862072_3kuo.jpg",
      user_id: 2
    },
    {
      nickname: "ana",
      species_name: "araceae",
      h2o_frequency: "three times a day",
      image: "https://images-na.ssl-images-amazon.com/images/I/51dYV4SY-AL.jpg",
      user_id: 3
    },
    {
      nickname: "Friendship Plant",
      species_name: "pilea",
      h2o_frequency: "three times a week",
      image: null,
      user_id: 2
    }
  ]);
};
