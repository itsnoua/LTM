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
      