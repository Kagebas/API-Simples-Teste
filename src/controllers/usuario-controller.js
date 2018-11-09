const mongoose = require('mongoose');
const repository = require('../repositories/usuario-repository');
const authService = require('../security/autenticacao');



exports.post = async (req, res, next) => {
    try {
        await repository.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            telefone: req.body.telefone
        });

        res.status(201).send({
            message: 'Usuario cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar seu cadastramento'
        });
    }
};

exports.authenticate = async (req, res, next) => {

     try {
         const validaUsuario = await repository.authenticate({
            email: req.body.email,
            senha: req.body.senha

         });
         
         if(!validaUsuario) {
            res.status(404).send({message: 'Usuário ou senha invalido'
           });
           return;
        }
         const token = await authService.generateToken({
             id: validaUsuario._id,
             email: validaUsuario.email,
             nome: validaUsuario.nome
         });
         
        
         res.status(201).send({
             token: token,
             data: {
                 email: validaUsuario.email,
                 nome: validaUsuario.nome
             }
         });
         
     } catch (e) {
         res.status(500).send({
             message: 'Falha ao processar sua autenticacao!'
         });
     }
};



