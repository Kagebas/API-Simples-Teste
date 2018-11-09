const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();


const db_url = 'mongodb://admin:admin123@ds018568.mlab.com:18568/restapi';
const mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'MongoDB não foi conectado'));



///Carrega os models
const usuarioModel = require('./models/usuario');
const vagaModels = require('./models/vaga');


///Carrega as rotas
const Vaga = require('./routes/vaga-routes');
const Usuario = require('./routes/usuario-routes');
const index = require('./routes/index-routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', index);
app.use('/vaga', Vaga);
app.use('/usuario', Usuario);



const port = 1111;

app.listen(port, ()=> {
    console.log('Server está rodando em http://localhost: ' + port);
});
