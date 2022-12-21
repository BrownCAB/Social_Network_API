const { User, Thought, Reaction } = require("../models");

module.exports = {
// POST to create a reaction stored in a single thought's reactions array field
// Create a User
  createReaction(req, res) {
    User.create(req.body)
      .then((newReaction) => res.json(newReaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
// DELETE to pull and remove a reaction by the reaction's reactionId value
deleteReaction(req, res) {
    Reaction.findOneAndDelete({ _id: req.params.reactionId })
      .then((reaction) =>
        !user
          ? res.status(404).json({ message: "No reaction with that ID" })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: "Reaction and deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

}