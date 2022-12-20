const router = require('express').Router();
const userRoutes = require('./api');
const thoughtRoutes = require('./thoughtRoutes')

router.use('/user', userRoutes);



module.exports = router;