const router = require('express').Router();
const { 
  createUsers, 
  updateUser,
  addFriend, 
  deleteUser
} = require('../../controllers/userController');

// /api/users
//router.route('/').get(getUsers)

router.route('/').post(createUser);

router.route('/:userId').put(updateUser).delete;

router.route('/userId/friends/:friends').put(addFriend)


// /api/users/:userId
// router.route('/:userId').get(getSingleUser);

module.exports = router;
