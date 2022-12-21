const router = require('express').Router();
const { 
  createReaction,
  deleteReaction,

} = require('../../controllers/reactionController');
const { route } = require('./thoughtRoutes');

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field
router
  .route('/:thoughtId/').post(createReaction)
// DELETE to pull and remove a reaction by the reaction's reactionId value
  
router
.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
