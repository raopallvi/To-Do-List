const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const Task = require('./models/tasks');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
/* Set up View engine */
app.set('view engine', 'ejs');

/* Set Up views */
app.set('views', path.join(__dirname, 'views'));

/* Set up static files */
app.use(express.static('assets'));

app.use(express.urlencoded());

/* Get request for home page */
app.get('/', function (req, res) {
    Task.find({})
        .then(task => {
            return res.render('home', {
                title: "To Do App",
                taskList: task
            })
        })
        .catch(err => {
            console.log("****Error In fetching Task from DB****");
            return;
        })
})

/* Post request for adding new task */
app.post('/create-task', function (req, res) {
    Task.create({
        Description: req.body.Description,
        Category: req.body.category,
        date: req.body.Date,
        isDone: false
    })
        .then(newTask => {
            console.log("************", newTask);
            return res.redirect('back');
        })
        .catch(err => {
            console.log("Error in creating new contact", err);
            return;
        })
})

/* get request for deleting task which are marked as done */
app.get('/delete-task/', function (req, res) {
    Task.deleteMany({ isDone: true })
        .then(() => {
            return res.redirect('/');
        })
        .catch(err => {
            console.log("Error in deletion of Task : ", err);
        })
})

/* check task event */
app.get('/check-task/', function (req, res) {
    const taskId = req.query.id;

  Task.findOne({ _id: taskId })
    .then(task => {
      if (task) {
        task.isDone = !task.isDone;
        return task.save();
      } else {
        console.log('Task not found');
        return res.sendStatus(404);
      }
    })
    .then(() => {
      console.log('Task updated successfully');
      return res.redirect('/');
    })
    .catch(err => {
      console.error('Error updating the task:', err);
      return res.sendStatus(500);
    });
})
/* Listening on port 8000 */
app.listen(port, function (err) {
    if (err) {
        console.log("Error : ", err);
    }
    else {
        console.log("Server is running on port : " << port);
        console.log("http://127.0.0.1:" + port);
    }
})
