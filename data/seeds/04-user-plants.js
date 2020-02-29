exports.seed = function(knex) {
  return knex("user_plants").insert([
    {
      nickname: "cash",
      user_id: 1,
      plant_id: 1,
      h2o_frequency: "twice a day",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/618qjKv5aoL._AC_SX355_.jpg"
    },
    {
      nickname: "morris",
      user_id: 1,
      plant_id: 2,
      h2o_frequency: "once a week",
      image:
        "https://cdn.webshopapp.com/shops/30495/files/265777268/pachira-aquatica-p-24-cm.jpg"
    },
    {
      nickname: "nutty",
      user_id: 2,
      plant_id: 2,
      h2o_frequency: "once a week",
      image:
        "https://cdn.webshopapp.com/shops/30495/files/265777268/pachira-aquatica-p-24-cm.jpg"
    },
    {
      nickname: "anfernie",
      user_id: 2,
      plant_id: 4,
      h2o_frequency: "never",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71NP3gTJmeL._SX425_.jpg"
    },
    {
      nickname: "newton",
      user_id: 2,
      plant_id: 3,
      h2o_frequency: "once a day",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61POinrSaZL._AC_SL1048_.jpg"
    },
    {
      nickname: "marley",
      user_id: 3,
      plant_id: 13,
      h2o_frequency: "three times a day",
      image:
        "https://i.etsystatic.com/15265690/r/il/9c7e6c/1211862072/il_570xN.1211862072_3kuo.jpg"
    },
    {
      nickname: "ana",
      user_id: 3,
      plant_id: 14,
      h2o_frequency: "three times a day",
      image: "https://images-na.ssl-images-amazon.com/images/I/51dYV4SY-AL.jpg"
    }
  ]);
};
