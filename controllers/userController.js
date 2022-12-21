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
          ? res.status(404).json({ message: "No course with this id!" })
          : res.json(updateUser)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a Friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((updatedUser) =>
        !updatedUser
          ? res.status(404).json({ message: "No course with this id!" })
          : res.json(updatedUser)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete User by Id and thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: "User and associated apps deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // `DELETE` to remove a friend from a user's friend list
  // removeFriend(req, res) {
  //   User.findOneAndDelete({ _id: req.params.friendId })
  //     .then((user) =>
  //       !user
  //         ? res.status(404).json({ message: "No user with that ID" })
  //         : Application.deleteMany({ _id: { $in: user.applications } })
  //     ).then(() => res.json({ message: "User and associated apps deleted!" }))
  //     .catch((err) => res.status(500).json(err));
  // },

}; // END
