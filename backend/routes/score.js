const express = require('express');
const Score = require('../modèles/score');

const router = express.Router();

// POST pour ajouter un score
router.post('/', async (req, res) => {
  try {
    const { levelId, userId, scoreBTime } = req.body;
    const newScore = new Score(levelId, userId, scoreBTime);
    await Score.save(newScore);
    res.status(201).json({ message: 'Score added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

