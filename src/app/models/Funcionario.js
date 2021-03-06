const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Encarregado = require('./Encarregado');
//const { nome } = Encarregado;

const Funcionario = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    cnh: {
        type: String,
        required: false
    },
    ctps: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    dataAdmissao: {
        type: Date,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    whatsapp:  {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        lowercase: true
    },
    salarioFixo: {
        type: Number,
        required: true
    },
    inicioFerias: {
        type: Date,
        required: false
    },
    fimFerias: {
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


    // // Encarregado.remove({ nome: this._id }).exec();
    // Funcionario.pre('remove', function(next) {
    //     Encarregado.find({ nome : this._id }).remove();
    //    next();
    // });





Funcionario.plugin(mongoosePaginate);
module.exports = mongoose.model('Funcionario', Funcionario);