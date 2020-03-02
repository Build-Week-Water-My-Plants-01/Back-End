const router = require('express').Router();
const Users = require('./user-model.js');

router.get('/:id', async (req, res) => {
  const id = req.params;
    try {
      const userId = await Users.findById(id)
      if (userId) {
        res.status(200).json(userId)
      } else {
        res.status(404).json({ message: 'User ID not found.' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving plants from the database.' })
    }
});

module.exports = router;

