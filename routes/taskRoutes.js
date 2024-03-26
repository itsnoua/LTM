<<<<<<< HEAD
const express = require('express'); 
const router = express.Router(); 
const taskController = require('../controllers/taskControllers');

router.get('/',taskController.getAllTask);
router.get('/:id', taskController.getTaskById); 
router.post('/',taskController.createTask);
router.put('/:id',taskController.updateTaskById);
router.delete('/:id',taskController.deleteTaskById);

module.exports = router
=======
const express = require('express'); 
const router = express.Router(); 
const taskController = require('../controllers/taskControllers');

router.get('/',taskController.getAllTask);
router.get('/:id', taskController.getTaskById); 
router.post('/',taskController.createTask);
router.put('/:id',taskController.updateTaskById);
router.delete('/:id',taskController.deleteTaskById);

module.exports = router
>>>>>>> 7e248a7d77829720cc16820b0b2b5863d8160275
