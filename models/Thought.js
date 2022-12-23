const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlenght: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            deafualt: Date.now,
            get: (timestamp) => formatDate(timestamp),
        },
    }
);


// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            deafualt: Date.now,
            get: (timestamp) => formatDate(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    }, {
        toJSON: {
            getters: true
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;