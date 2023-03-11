const Task = require('../models/TaskModel');
const asyncwrapper = require('../middleware/AsyncWrapper');
const {createCustomError} = require('../errors/CustomError');

module.exports = {
    index: asyncwrapper( async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({ tasks, amount:tasks.length});
    }),
    create: asyncwrapper( async (req, res) => {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }),
    show: asyncwrapper( async (req, res, next) => {
        const {id: taskId} = req.params;
        const task = await Task.findOne({_id: taskId});
    
        if(!task){
          return next(createCustomError(`Task with id ${req.params.id}, not found !`, 404));
        }
    
        res.status(200).json(task);
    }),
    update: asyncwrapper( async (req, res) => {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {new: true, runValidators: true});

        if(!task){
          return next(createCustomError(`Task with id ${req.params.id}, not found !`, 404));
        }
    
        res.status(200).json(task);
    }),
    delete: asyncwrapper( async (req, res) => {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId});

        if(!task){
          return next(createCustomError(`Task with id ${req.params.id}, not found !`, 404));
        }

        res.status(200).json({msg: 'Task success deleted !'});
    })
}