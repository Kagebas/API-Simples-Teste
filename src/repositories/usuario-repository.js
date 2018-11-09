const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const authService = require('../security/autenticacao');


exports.create = async(data) => {
    var usuario = new Usuario(data);
    await usuario.save();
}

exports.authenticate = async (data) => {
    const res = await Usuario.findOne({
        email: data.email,
        senha: data.senha
    });
    return res;
}

exports.getById = async (id) => {
    const res = await Usuario.findById(id);
    return res;
}