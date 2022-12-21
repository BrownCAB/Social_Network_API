const router = require('express').Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  addFriend,
  deleteUser,
  // removeFrienfd,
} = require('../../controllers/userController');

// /api/users - Create User
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId - RUD
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
