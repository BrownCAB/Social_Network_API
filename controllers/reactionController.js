const { User, Thought, Reaction } = require("../models");

module.exports = {
// POST to create a reaction stored in a single thought's reactions array field
// Create a User
  createReaction(req, res) {
    Thought.findOneAndUpdate({_id: req.params.thoughtId}, { $addToSet: { reactions: req.body } })
      .then((newReaction) => res.json(newReaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
// DELETE to pull and remove a reaction by the reaction's reactionId value
deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions:{ _id: req.params.reactionId}} }
      ).then(() => res.json({ message: "User and associated apps deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

}