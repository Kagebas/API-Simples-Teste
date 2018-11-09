const express = require('express');
const router = express.Router();
const vaga = require('../controllers/vaga-controller');
const autenticacao = require('../security/autenticacao');


router.get('/', vaga.get);
router.get('/:id', vaga.getById);
router.post('/', autenticacao.authorize, vaga.post);
router.put('/:id',autenticacao.authorize, vaga.put);
router.delete('/:id',autenticacao.authorize, vaga.delete);



module.exports = router;

