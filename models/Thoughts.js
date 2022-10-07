const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

//Schema to create thought model 

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        // // `Date.now()` returns the current unix timestamp as a number
        default: Date.now,
        get: (thoughtCreatedAt) => moment(thoughtCreatedAt).format('MMMM Do, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
});

//create a virtual called 'reactionCount' that retrieves the lgnth of the thoughts reactions array field on query. 
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})


//initalise our thoughgts models. 
const Thoughts = model('Thoughts', thoughtSchema)

//export model
module.exports = Thoughts