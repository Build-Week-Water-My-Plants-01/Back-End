const router = require("express").Router();

const Users = require("./user-model.js");

// return the user's data upon login
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.getUserById(id);
    const plants = await Users.getPlants(id);

    if (user) {
      res.status(200).json({
        ...user,
        plants
      });
    } else {
      res.status(500).json({ error: "Invalid User" });
    }
  } catch (err) {
    res.status(404).json({ error: "User not found!" });
  }
});

module.exports = router;
