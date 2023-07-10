# 📂 NodeJS com Express e Bootstrap

## 📃 Projeto desenvolvido

<br />

## 🚀 Tecnologias

- HTML5
- Bootstrap
- Node.js
- Express

<br />


## Iniciar Projeto

    nodemon server
## 💻 Projeto
> Frontend da aplicação 📸

<p align="center">
  <img alt="To-do list" src="./img/frontend.png" width="100%">
</p>

[Acessar o projeto](https://wsawebmaster.github.io/portfolio/)

<br />

Script MySQL para criação do banco de dados, tabela e carga de dados inicial:

    CREATE DATABASE projeto;

    USE projeto;

    CREATE TABLE filmes_e_series(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL UNIQUE,
        ano_lancamento INT NOT NULL
    );

    insert into filmes_e_series(titulo,ano_lancamento) values('Titanic',1997);
    insert into filmes_e_series(titulo,ano_lancamento) values('O Irlandês',2019);

    select * from filmes_e_series;

Instalar express de forma global

    npm install -g -s express express-generator

Criar o projeto (cria automaticamente estrutura de pastas inicial)

    express --view=ejs projeto

Acesse a pasta projeto e instale as dependências

    npm install

Executar o projeto

    npm start

Para realizar teste acesse a url http://localhost:3000/

Instalar MySQL

	npm install mysql

Obs.: caso não consiga acesso deve adicionar o Path C:\Program Files\MySQL\MySQL Server 8.0\bin as variáveis de ambiente, acesse o powershell como administrador

	C:\Program Files\MySQL\MySQL Server 8.0\bin
	mysql -u root -p

`ALTER USER 'root'@'localhost' IDENTIFIED BY 'desenvolvedor@123';`

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'desenvolvedor@123';`

Instalar Nodemon de forma global

    npm install -g -s nodemon

---
---
## 📧 Contato
wsawebmaster@yahoo.com.br
