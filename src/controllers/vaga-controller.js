const mongoose = require('mongoose');
const repository = require('../repositories/vaga-repository');





exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua procura'
        });
    }
}

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua procura por ID'
        });
    }
}



exports.post = async (req, res, next) => {
    try {
        await repository.create({
            referencia: req.body.referencia,
            descricao: req.body.descricao,
            remuneracao: req.body.remuneracao
        });
        res.status(201).send({
            message: 'Vaga cadastrada com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao cadastrar sua vaga!'
        });

    }
}

exports.put = async(req, res, next) => {
    try {
        await repository.findOneAndUpdate(req.params.id, req.body)
        res.status(200).send({
            message: 'Vaga atualizada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua alteração'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.findOneAndRemove(req.params.id)
        res.status(200).send({
            message: 'Vaga removida com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua exclusão'
        });
    }
};
