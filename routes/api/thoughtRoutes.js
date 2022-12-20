const router = require('express').Router();
const { 
  createThought, 
  updateThought,

} = require('../../controllers/thoughtController');

router.route('/').post(createThought);

module.exports = router;