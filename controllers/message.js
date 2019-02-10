const express = require('express');
const moment = require('moment');
const db = require('mongoose');
const Message = require('../models/messageModel');
const router = express.Router();


db.connect('mongodb://localhost/bot_database'); //insira aqui a URL do seu banco MongoDB


router.post('/', function(request, response){
    const message = new Message({
        id: new db.Types.ObjectId(),
        conversationId: request.body.convo,
        timestamp: moment().format(),
        from: request.body.from,
        to: request.body.to,
        text: request.body.message
    })
    message.save()
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    })

    response.status(201).json({message: "nova mensagem criada com sucesso!"})
});

router.get('/', function (request, response){
    response.setHeader('Content-Type', 'application/json');
    const conversationid = request.query.id;
    Message.find({conversationId: conversationid})
    .then(doc=>{
        console.log(doc);
        response.status(200).json(doc);
    })
    .catch(error=>{
        console.log(error)
        response.status(500).json({err: error});
    })
    

});

router.get('/:id', function (request, response){
    response.setHeader('Content-Type', 'application/json');
    const id = request.params.id;
    Message.findById(id)
    .then(doc=>{
        console.log(doc);
        response.status(200).json(doc);
    })
    .catch(error=>{
        console.log(error)
        response.status(500).json({err: error});
    })
    

});


