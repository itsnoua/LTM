const express = require('express'); 
const router = express.Router(); 
const taskController = require('../controllers/taskControllers');

router.get('/',taskController.getAllTask);
router.get('/:id', taskController.getTaskById); 
router.post('/',taskController.createTask);
router.put('/:id',taskController.updateTaskById);
router.delete('/:id',taskController.deleteTaskById);

module.exports = router