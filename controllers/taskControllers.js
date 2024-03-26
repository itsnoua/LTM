<<<<<<< HEAD
const taskModel = require('../models/taskModels')

// get all
const getAllTask = async (req, res) => {
    try {
        const allTask = await taskModel.find();
        res.status(200).json(allTask)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while fetching tasks'})
    }
}

const getByStatus = (req, res) => {
  try {
    const allStatus = ["completed", "Pending", "In Progress"];

    if (req.params.status === undefined) {
      return res.status(400).json({ error: "Missing status parameter" });
    }

    if (!allStatus.includes(req.params.status)) {
      return res.status(404).json({ error: `Invalid status: ${req.params.status}` });
    }

    const task = readFile();

    const foundTasks = Object.entries(task).filter(
      ([_, taskData]) => taskData.status === req.params.status
    );

    return res.status(200).json({ data: foundTasks });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

  

// get by id 
const getTaskById = async (req, res) =>{
    try{
        const TaskById = await taskModel.findById(req.params.id);

        if(!TaskById){
            return res.status(404).json({ message: `Task with ID ${id} not found` });
        }
        res.status(200).json(TaskById);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching task' });
    }
}

// creat task
const createTask = async (req, res) =>{
    try{
        const newTaskData = req.body;
        const newTask = new taskModel(newTaskData);
        await newTask.save();
        res.status(201).json({ task: newTask });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'An error occurred while creating task' });
    }
  }

//   update task 
const updateTaskById = async (req, res) =>{
    try{
        const updateTask = await taskModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!updatedTask) {
            return res.status(404).json({ message: `Task with ID ${id} not found` });
          }
          res.status(200).json({ task: updatedTask });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while updating task' });
        }
      }

    //   delet task
    const deleteTaskById = async (req, res) => {
        try {
            const id = req.params.id;
            await Task.findByIdAndDelete(id);
            res.status(204).json({ message: 'Task deleted successfully' }); 
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while deleting task' });
          }
        }

        
    module.exports = {
        getAllTask,
        getTaskById,
        createTask,
        updateTaskById,
        deleteTaskById,
      };
      
=======
const taskModel = require('../models/taskModels')

// get all
const getAllTask = async (req, res) => {
    try {
        const allTask = await taskModel.find();
        res.status(200).json(allTask)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while fetching tasks'})
    }
}

// get by id 
const getTaskById = async (req, res) =>{
    try{
        const TaskById = await taskModel.findById(req.params.id);

        if(!TaskById){
            return res.status(404).json({ message: `Task with ID ${id} not found` });
        }
        res.status(200).json(TaskById);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching task' });
    }
}

// creat task
const createTask = async (req, res) =>{
    try{
        const newTaskData = req.body;
        const newTask = new taskModel(newTaskData);
        await newTask.save();
        res.status(201).json({ task: newTask });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'An error occurred while creating task' });
    }
  }

//   update task 
const updateTaskById = async (req, res) =>{
    try{
        const updateTask = await taskModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!updatedTask) {
            return res.status(404).json({ message: `Task with ID ${id} not found` });
          }
          res.status(200).json({ task: updatedTask });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while updating task' });
        }
      }

    //   delet task
    const deleteTaskById = async (req, res) => {
        try {
            const id = req.params.id;
            await Task.findByIdAndDelete(id);
            res.status(204).json({ message: 'Task deleted successfully' }); 
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while deleting task' });
          }
        }

        
    module.exports = {
        getAllTask,
        getTaskById,
        createTask,
        updateTaskById,
        deleteTaskById,
      };
      
>>>>>>> 7e248a7d77829720cc16820b0b2b5863d8160275
