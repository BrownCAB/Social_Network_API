const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+], //gist e-mail
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
        friends: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
  }, {
    toJSON: {
        virtual: true;
    ],
    }
});
  
  module.exports = Users