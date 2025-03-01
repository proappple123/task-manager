const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/tasks/:id', authMiddleware, taskController.getTaskById);
router.get('/tasks', authMiddleware, taskController.getAllTasks);
router.post('/tasks', authMiddleware, taskController.createTask);
router.put('/tasks/:id', authMiddleware, taskController.updateTask);
router.delete('/tasks/:id', authMiddleware, taskController.deleteTask);

module.exports = router;
