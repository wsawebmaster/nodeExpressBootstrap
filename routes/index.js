var express = require('express');
const db = require('../util/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Rota GET teste conexão ao Banco de Dados e lista filmes e séries cadastrados */
router.get('/listar',function(req, res) {
  db.query('SELECT * FROM filmes_e_series ORDER BY ano_lancamento, titulo',[],function(erro,resultado){
    if(erro){
      res.status(200).send(erro);
    }
    res.render('lista',{ lista : resultado });
  });
});

/* GET para acessar form de cadastro filme/séria. */
router.get('/add', function(req,res) {
  res.render('form');
});

/* POST para receber os dados do form novo filme/séria. */
router.post('/add', function(req,res) {
  db.query(
    "INSERT INTO filmes_e_series(titulo,ano_lancamento) VALUES(?,?)",
    [req.body.titulo, req.body.ano_lancamento],
    function (erro) {
      if (erro) {
        res.status(200).send("Erro: " + erro);
      }
      res.redirect("/listar");
    }
  );
});


module.exports = router;
