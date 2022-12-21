const router = require('express').Router();
const { 
  createReaction,
  deleteRaction,

} = require('../../controllers/reactionController');

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field
router
  .route('/api/thoughts/:thoughtId/reactions').post(createReaction)
// DELETE to pull and remove a reaction by the reaction's reactionId value
  .delete(deleteRaction);

module.exports = router;
