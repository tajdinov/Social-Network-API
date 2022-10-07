const router = require('express').Router();

// establish routes (user and thought routes)
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// Add /users to created routes 
router.use('/users', usersRoutes);

// Add /thoughts to created routes 
router.use('/thoughts', thoughtsRoutes);

//export
module.exports = router;