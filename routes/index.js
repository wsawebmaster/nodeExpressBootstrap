var express = require('express');
const db = require('../util/db');
var router = express.Router();

/* GET home page */
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
  res.render('form', {filme: {}});
});

/* POST para receber os dados do form novo filme/série. */
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

// GET rota para buscar o filme/série para edição
router.get('/edit/:id', function (req, res) {
  db.query('SELECT * FROM filmes_e_series WHERE id = ?', [req.params.id], function(erro,resultado){
    if(erro){
      res.status(200).send("Erro: " + erro);
    }
    // res.status(200).send(resultado);
    res.render("form", { filme: resultado[0] });
  })
});

/* POST para receber os dados do form para edição de filme/série. */
router.post('/edit/:id', function(req,res) {
  db.query(
    "UPDATE filmes_e_series SET titulo = ?, ano_lancamento = ? WHERE id = ?",
    [req.body.titulo, req.body.ano_lancamento, req.params.id],
    function (erro) {
      if (erro) {
        res.status(200).send("Erro: " + erro);
      }
      res.redirect("/listar");
    }
  );
});

/* DELETE para receber os dados do form para exclusão de filme/série. */
router.delete('/delete/:id', function(req,res) {
  db.query(
    "DELETE FROM filmes_e_series WHERE id = ?",[req.params.id],
    function (erro) {
      if (erro) {
        res.status(200).send("Erro: " + erro);
      }else{
        res.status(200).send('OK')
      }
    }
  );
});

module.exports = router;
