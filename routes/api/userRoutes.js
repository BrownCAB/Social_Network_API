const router = require('express').Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  addFriend,
  deleteUser,
} = require('../../controllers/userController');

// /api/courses - Create User
router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:userId - RUD
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId - CD
router 
  .route('/api/users/:userId/friends/:friendId')
  .post(addFriend);
  // .delete(removeFriend);

module.exports = router;
