const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); //Instanciando a aplicacao

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-afwbi.mongodb.net/twitterBD?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//req: requisicao que esta sendo feita ao servidor
//res: serve para devolver a resposta para o frontend
// app.get('/', (req, res) => { 
//     return res.send('Olá!');
// });

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
}); 

