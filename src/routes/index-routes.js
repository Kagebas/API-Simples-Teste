const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Seja bem vindo a esta api que está funcionando na porta ' + port);
});

module.exports = router;