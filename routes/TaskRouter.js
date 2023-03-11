const router = require('express').Router();
const TaskController = require('../controllers/TaskController');

router.route('/').get(TaskController.index).post(TaskController.create);
router.route('/:id').get(TaskController.show).patch(TaskController.update).delete(TaskController.delete);

module.exports = router;