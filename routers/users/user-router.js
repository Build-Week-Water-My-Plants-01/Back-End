const router = require("express").Router();

// middlewares
const { multerUpload } = require("../../api/middlewares/multer.js");
const {
  validateId,
  validateSpecies,
  validateImage,
  validateRequired
} = require("../../api/middlewares/data-validation/validateData.js");

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

// adding a plant
router.post(
  "/:id/plants",
  validateId,
  multerUpload,
  validateRequired,
  validateSpecies,
  validateImage,
  async (req, res) => {
    const { id } = req.params;
    const plantData = { ...req.body, user_id: id };

    try {
      const arr = await Users.addPlant(plantData);

      res.status(201).json(arr);
    } catch ({ name, message }) {
      res.status(500).json({ name, message });
    }
  }
);

//   editing a plant
router.put(
  "/:id/plants/:plantid",
  validateId,
  multerUpload,
  validateRequired,
  validateSpecies,
  validateImage,
  async (req, res) => {
    const { _, plantid } = req.params;
    const plantData = req.body;

    try {
      const edited = await Users.updatePlant(plantData, plantid);
      res.status(200).json(edited);
    } catch (err) {
      res.status(500).json({ error: "Plant cannot be updated at this moment" });
    }
  }
);

module.exports = router;
