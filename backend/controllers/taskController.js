const { Task } = require('../models');

exports.getTaskById = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    res.send(task);
  } else {
    res.status(404).send({ error: 'Task not found' });
  }
};

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.send(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.send(task);
};

exports.updateTask = async (req, res) => {
  const [updated] = await Task.update(req.body, {
    where: { id: req.params.id },
  });
  if (updated) {
    const updatedTask = await Task.findByPk(req.params.id);
    res.send(updatedTask);
  } else {
    res.status(404).send({ error: 'Task not found' });
  }
};

exports.deleteTask = async (req, res) => {
  const deleted = await Task.destroy({
    where: { id: req.params.id },
  });
  if (deleted) {
    res.send({ message: 'Task deleted' });
  } else {
    res.status(404).send({ error: 'Task not found' });
  }
};
