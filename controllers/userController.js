const {User, Thought} = require('../models');

module.exports = {
    // Create user
    createUser(req, res) {
        User.create(req.body)
        .then((newUser)=> res.json(newUser))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    //Get a single user
    
    //Update User
    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true }
        ).then(updateUser =>
        !updateUser
        ? res.status(404).json({ message: 'No user with this id!' }) : res.json(updateUser)
        ).catch((err) => res.status(500).json(err));
    },
    // Add a Friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendsId}}, {new: true}
            ).then(updateUser) =>      
    },
    //Delete User and thoughts
    deleteUser(req, res) {
        User.findOneAndRemove({
            {_id: req.params.userId}),
        ).then(deleteUser) => {
            if (!deleteUser) {
                return res.status(404).json({message:"No user with this Id!"});
    }
    Thought.deleteMany({ _id: { $in: deleteUser.thoughts } });
        }).then((thoughts)=> res.json(thoughts))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
        },
    //Delete friend