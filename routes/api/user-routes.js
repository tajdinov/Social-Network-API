const router = require('express').Router();
const {
    //POST
    createUser,
    addNewFriend,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

//api/users ----------GET all Users and POST a NEW USER 
router.route('/')
    .get(getAllUsers)
    .post(createUser);

//api/users/:id -------GET USER BY ID, UPDATE USER BY ID and DELETE USER BY ID 
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);



//api/users/:userId/friends/:friendId -----POST /NEW FRIEND TO USERS FRIEND LIST and REMOVE A FRIEND 
router.route('/:id/friend/:friendId')
    .post(addNewFriend)
    .delete(removeFriend);



module.exports = router;