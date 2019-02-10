const express = require('express');
const moment = require('moment');
const db = require('mongoose');
const Bot = require('../models/botModel');
const router = express.Router();


db.connect('mongodb://localhost/bot_database');


router.post('/', function(request, response){
    const bot = new Bot({
        id: new db.Types.ObjectId(),
        name: request.body.name
    })
    bot.save()
    .then(result=>{
        console.log(result);
        
    })
    .catch(error=>{
        console.log(error);
        
    })

    response.status(201).json({message: "novo bot criado com sucesso!"})
});

router.get('/:id', function (request, response){
    response.setHeader('Content-Type', 'application/json');
    const id = request.params.id;
    Bot.findById(id)
    .then(doc=>{
        console.log(doc);
        response.status(200).json(doc);
    })
    .catch(error=>{
        console.log(error)
        response.status(500).json({err: error});
    })
    

});