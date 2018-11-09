const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario-controller');
const autenticacao = require('../security/autenticacao');





//router.get('/test', usuario.test);
router.post('/create', usuario.post);
router.post('/authenticate', usuario.authenticate, autenticacao.authorize);


module.exports = router;
