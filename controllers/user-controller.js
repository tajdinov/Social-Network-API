const { User } = require('../models');

module.exports = {
    //get all USER
    getAllUsers(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //create a new USER 
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //get a user by _id 
    getUserById(req, res) {
        User.findOne({ _id: req.params.id })
            .select('-__v')
            .then((user) =>
                !user ?
                res.status(404).json({ message: "No user with that ID" }) :
                res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //update a user by its id 
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
            .then((user) =>
                !user ?
                res.status(404).json({ message: 'No course with this id!' }) :
                res.json({ message: "User information has been updated" })
                // :res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //delete a user by its id
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.id })
            .then((user) =>
                !user ?
                res.status(404).json({ message: "No user with that Id" }) :
                res.json({ message: "User has been deleted" })
                // :res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },

    //add a new friend by users id

    addNewFriend(req, res) {
        console.log('You are adding a friend');
        console.log(req.body);
        User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { runValidators: true, new: true })
            .then((user) =>
                !user ?
                res
                .status(404)
                .json({ message: 'No user found with that ID' }) :
                res.json({ message: "You have added a new friend" })
            )
            .catch((err) => res.status(500).json(err));
    },

    //delete a friend from a users friend list
    removeFriend(req, res) {
        console.log('You are removing a friend');
        console.log(req.body);
        User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { runValidators: true, new: true })
            .then((user) =>
                !user ?
                res.status(404).json({ message: 'No friend found with that id' }) :
                res.json({ message: "You have removed a friend" })
            )
            .catch((err) => res.status(500).json(err));
    }

}