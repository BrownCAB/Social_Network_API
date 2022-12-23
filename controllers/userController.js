const { User, Thought } = require("../models");

module.exports = {
  // GET all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a User
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update User by id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updateUser) =>
        !updateUser
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(updateUser)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a Friend
  addFriend(req, res) {
    console.log("userId", req.params.userId)
    console.log("friendId", req.params.friendId)
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((friendData) => {
        if (!friendData) {
          res.status(404).json({
            message: "Error: User does not exist.",
          });
        } else {
          res.status(200).json({
            message: "Friends updated successfully.",
            user: friendData,
          });
        }
      })
      .catch((err) => {
        console.log("An error has occurred: ", err);
        res.status(500).json(err);
      });
  },
  // Delete User by Id and thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            message: "Error: User does not exist.",
          });
        }
        Thought.deleteMany({username: user.username})
        .then((res) => {
          res.status(200).json({
            message: "User deleted successfully.",
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "An error occured when deleting thoughts", err
          });
        });
      })
      .catch((err) => {
        console.log("An error has occurred: ", err);
        res.status(500).json(err);
      });
  },
  // `DELETE` to remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((friendData) => {
        if (!friendData) {
          res.status(404).json({
            message: "Error: User does not exist.",
          });
        } else {
          res.status(200).json({
            message: "Friend deleted successfully.",
            user: friendData,
          });
        }
      })
      .catch((err) => {
        console.log("An error has occurred: ", err);
        res.status(500).json(err);
      });
  },
};
