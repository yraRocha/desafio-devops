const express = require('express');
const routes = express.Router();
const faker = require('faker');
faker.locale = 'pt_BR';

const connection = require('./connectionDb');

routes.get('/', (_, res) => {
    const insertSql = `INSERT INTO peoples(name) VALUES('${faker.name.findName()}')`;

    // Executa o INSERT com callback e tratamento de erro
    connection.query(insertSql, (err) => {
        if (err) {
            console.error('Erro no INSERT:', err);
            return res.status(500).send('Erro ao inserir no banco');
        }

        // Depois do insert, executa o SELECT
        connection.query("SELECT * FROM peoples", (err, results) => {
            if (err) {
                console.error('Erro no SELECT:', err);
                return res.status(500).send('Erro ao consultar o banco');
            }

            let html = '<h1>Desafio Devops!</h1>';

            results.forEach(element => {
                html += element.name + '<br>';
            });

            return res.send(html);
        });
    });
});

module.exports = routes;
