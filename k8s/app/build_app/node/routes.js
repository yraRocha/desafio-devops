const express = require('express');
const routes = express.Router();
const faker = require('faker');
faker.locale = 'pt_BR';

const connection = require('./connectionDb');

routes.get('/', (_, res) => {
  const insertSql = 'INSERT INTO peoples(name) VALUES (?)';
  const randomName = faker.name.findName();

  // Primeiro INSERT com tratamento de erro
  connection.query(insertSql, [randomName], (err) => {
    if (err) {
      console.error('Erro no INSERT:', err);
      return res.status(500).send('Erro ao inserir no banco');
    }

    // Depois SELECT com tratamento de erro
    connection.query('SELECT * FROM peoples', (err, results) => {
      if (err) {
        console.error('Erro no SELECT:', err);
        return res.status(500).send('Erro ao consultar o banco');
      }

      let html = '<h1>Desafio Devops!</h1>';

      results.forEach((row) => {
        html += row.name + '<br>';
      });

      return res.send(html);
    });
  });
});

module.exports = routes;
