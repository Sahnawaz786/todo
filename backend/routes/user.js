var express = require('express');
var Task = require('../Models/task');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all task');
    Task.find({}).exec(function(err, books){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(books);
            res.json(books);
        }
    });
});

router.get('/:id', function(req, res){
    console.log('getting one book');
    Task.findOne({
        _id: req.params.id
    }).exec(function(err, book){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(book);
            res.json(book);
        }
    });
});

router.post('/', function(req, res){
    var newTask = new Task();
    newTask.task = req.body.title;
    newTask.save(function(err, book){
        if(err) {
            res.send('error saving book');
        } else {
            console.log(book);
            res.send(book);
        }
    });
});

router.put('/:id', function(req, res){
    Task.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            task: req.body.title
        }
    },{
        upsert: true
    },function(err, newBook){
        if(err) {
            res.send('error updating book');
        } else {
            console.log(newBook);
            res.send(newBook);
        }
    });
});

router.delete('/:id', function(req, res){
    Task.findByIdAndRemove({
        _id: req.params.id
    },function(err, book){
        if(err) {
            res.send('error deleting book');
        } else {
            console.log(book);
            res.send(book);
        }
    });
});

module.exports = router;