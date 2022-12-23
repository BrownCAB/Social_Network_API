const router = require('express').Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  addFriend,
  deleteUser,
  removeFriend,
} = require('../../controllers/userController');

// http://localhost:3001/api/users
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// http://localhost:3001/api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// http://localhost:3001/api/users/:id/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
