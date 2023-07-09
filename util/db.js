const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'desenvolvedor@123',
  port: 3306,
  database: 'projeto',
  multipleStatements: true
});

// Conexão com Banco
db.connect((erro) => {
  if(erro){
    throw erro;
  }
  console.log(`Conectado com êxito ao Banco de Dados`)
});

global.db = db;

module.exports = db;
