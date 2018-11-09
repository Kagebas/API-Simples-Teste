var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const schema = new Schema({
    referencia: {
        type: String,
        required: true,
        trim: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    descricao: {
        type: String,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    remuneracao: {
        type: Number,
        required: true
    }


});

module.exports = mongoose.model('Vaga', schema);
