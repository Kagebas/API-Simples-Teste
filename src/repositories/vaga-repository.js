const mongoose = require('mongoose');
const Vaga = mongoose.model('Vaga');


exports.get = async() => {
    const res = await Vaga.find({ });
    return res;
}


exports.getById = async(id) => {
    const res = await Vaga.findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = Vaga.find({
        tag: tag,
        active: true
    }, 'referencia descricao remuneracao');
    return res;
}


exports.create = async (data) => {
    var nova_vaga = new Vaga (data);
    await nova_vaga.save();
}

exports.update = async(id, data) => {
    await Vaga.findByIdAndUpdate(id, {
        $set: {
            referencia: data.referencia,
            descricao: data.descricao,
            remuneracao: data.remuneracao
        }
    });
}

exports.delete = async(id) => {
    await Vaga.findOneAndRemove(id);
}

