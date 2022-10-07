const router = require('express').Router();
const {
    createThought,
    createReaction,
    getAllThoughts,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts);


router.route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)
    .post(createThought);


router.route('/:thoughtId/:reactionsId')
    .post(createReaction)
    .delete(removeReaction);



module.exports = router;