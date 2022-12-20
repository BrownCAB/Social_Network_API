const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate')

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
            get: timestamp => formattedDate(timestamp),
        },
    }
)

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction
