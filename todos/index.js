const Task = require('../db').task
const Note = require('../db').note
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all tasks
    Task.findAll({include:["notes"]})
        .then((tasks) => {
            res.status(200).send(tasks)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve tasks"
            })
        })
})

route.get('/date', (req, res) => {

    console.log('getdate');
    Task.findAll({
        include:["notes"],
        order:[['dueDate', 'DESC']]})
        .then((tasks) => {
            res.status(200).send(tasks)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve tasks"
            })
        })
})
route.get('/prio', (req, res) => {

   
    Task.findAll({
        include:["notes"],
        order:[['priority', 'DESC']]})
        .then((tasks) => {
            res.status(200).send(tasks)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve tasks"
            })
        })
})
route.post('/', (req, res) => {
     
     
    // Add a new task
    Task.create({
        title: req.body.title,
        description: req.body.description,
        dueDate:req.body.dueDate,
        priority:req.body.priority
    }).then((task) => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding Task"
        })
    })
})
route.post('/:id',(req,res)=>{
    Note.create({
        taskId:req.params.id,
        notetxt:req.body.notetxt
    }).then((note)=>{
        res.status(201).send(note)
    }).catch((error)=>{
        res.status(501).send({
            error:"Error Adding Notes"
    })
})
})
exports = module.exports = route