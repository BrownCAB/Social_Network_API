const { Thought, User, Reaction } = require('../models');

module.exports = {
    // `GET` to get all thoughts
    async getAllThought (req, res) {
        try {
            const allThought = await Thought.find()
            res.json(allThought)
        } catch {
        console.log(err);
        res.status(500).json(err);
        }
    },
    // `GET` to get a single thought by its `_id`
    async getSingleThought (req, res) {
        try {
            const singleThought = await Thought.findOne({_id: req.params.thoughtId})
            res.json(singleThought)
        } catch (error) {
            console.log(err);
         res.status(500).json(err);
        }
    },
    // `POST` to create a new thought 
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            const updatedUser = await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: newThought._id}},
                {new: true},
            )
            if (!updatedUser) {
                return res.status(404).json({message:"No user with this Id!"});
            }
            res.json(newThought);
        } catch (error) {
            console.log(err);
         res.status(500).json(err);
        }
    },
    // `PUT` to update a thought by its `_id`
    async updateThought (req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body });
            if(!updateThought) {
                res.status(404).json({ message: 'No thought' });
                return;
            }
            res.json(updateThought)
        } catch (error) {
            console.log(err);
         res.status(500).json(err);
        }
    },
    //`DELETE` to remove a thought by its `_id`
    async deleteThought (req, res) {
        try {
            const deleteThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if(!deleteThought) {
                res.status(404).json({ message: 'No thought' });
                return;
            }
            res.status(200).json(deleteThought);
        } catch (err) {
            console.log(err);
         res.status(500).json(err);
        }
    },
}
