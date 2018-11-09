var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', schema);