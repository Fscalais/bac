const db = require('../utiles/databases');

class Score {
  constructor(levelId, userId, scoreBTime) {
    this.levelId = levelId;
    this.userId = userId;
    this.scoreBTime = scoreBTime;
  }

  static async save(score) {
    try {
      const [result] = await db.execute(
        'INSERT INTO scoreboard (levelId, userId, scoreBTime) VALUES (?, ?, ?)',
        [score.levelId, score.userId, score.scoreBTime]
      );
      return result;
    } catch (error) {
      throw new Error(`Error saving score: ${error.message}`);
    }
  }
}

module.exports = Score;

