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