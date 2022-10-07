const { Schema, Types } = require('mongoose');
const moment = require('moment')

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        // // `Date.now()` returns the current unix timestamp as a number
        default: Date.now,
        get: (thoughtCreatedAt) => moment(thoughtCreatedAt).format('MMMM Do, YYYY [at] hh:mm a')
    }
}, {
    toJSON: {
        getters: true,
    },
    id: false,
});

module.exports = reactionSchema;