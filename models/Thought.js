const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate')
const reactionSchema = require('./Reaction.js')

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
            get: timestamp => formattedDate(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },{
        toJSON: {
            getters: true
        },
     }
    };


    });

const Thought = model('thought', thoughtSchema);

  module.exports = Thought