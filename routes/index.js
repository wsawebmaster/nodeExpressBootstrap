var express = require('express');
const db = require('../util/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET para exibir uma mensagem. */
router.get('/mensagem', function(req,res) {
  res.render('mensagem', { mensagem: 'Você acessou a rota mensagem' });
});

/* GET sem view de retorno */
router.get('/mensagem2', function(req, res) {
  res.status(200).send('Olá, você acessou a rota sem view mensagem2');
});

/* Rota GET teste conexão ao Banco de Dados e lista filmes e séries cadastrados */
router.get('/listar',function(req, res) {
  db.query('SELECT * FROM filmes_e_series ORDER BY ano_lancamento, titulo',[],function(erro,resultado){
    if(erro){
      res.status(404).send(erro);
    }
    res.render('lista',{ lista : resultado });
  });
});

module.exports = router;
