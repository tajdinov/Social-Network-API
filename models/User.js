const { Schema, model } = require('mongoose');

//Schema to create a user model 
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        // validate: [validateEmail, 'Please fill in with a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/, 'Please enter a valid email address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]

}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

//create a virtual called 'friendCount' that retrieves the length of the users firends array field on query.
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//initalise our user model 

const User = model('User', userSchema)

module.exports = User