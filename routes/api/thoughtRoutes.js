const router = require('express').Router();
const { 
  createThought,
  getAllThought,
  getSingleThought,
  updateThought, 
  deleteThought,

} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThought).post(createThought);

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;