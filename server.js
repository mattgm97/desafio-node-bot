(function onStart(){
    const express = require('express');
    const bodyParser = require("body-parser");
    const port = process.env.API_PORT || 5050;
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
 
    const Messages = require('./controllers/messages');
    const Bot = require('./controllers/bot')
    app.use('/messages', Messages);
    app.use('/bots', Bot);
    
    app.listen(port, () => console.log(`API  iniciando na porta ${port}`));
})()