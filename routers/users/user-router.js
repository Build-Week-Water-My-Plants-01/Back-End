const router = require("express").Router();
const bc = require("bcryptjs");

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

// update user info
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const user = await Users.getUserWithPassword(id);
    if (user) {
      if (userData.username && userData.password && userData.phone_number) {
        const hash = bc.hashSync(userData.password, 10);

        userData.password = hash;

        const updatedUser = await Users.updateUser(userData, id);

        res.status(200).json(updatedUser);
      } else {
        res.status(400).json({ error: "Please provide required fields" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch ({ name, message, error }) {
    res.status(404).json({ name, message, error });
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
