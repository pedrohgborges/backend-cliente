//adicionar a biblioteca express:
const express = require('express');

//base de dado volátil e estática:
var clientes = [
    {
        id: 1,
        nome: 'pedro henrique galvão borges',
        email: 'pedro.borges2@fatec.sp.gov.br'
    },
    {
        id: 2,
        nome: 'ciclano',
        email:""
    }
];

const server = express();

server.get('/cliente', function (request, response) {
    return response.json(clientes);
});

server.get('/cliente/:id', function (request, response) {

    const id = request.params.id;
    const cliente = clientes.filter(c => c.id == id);

    return response.json(cliente);
});

server.delete('/cliente/:id', function(request,response){
    const id = request.params.id;
    clientes = clientes.filter(c => c.id != id);
    return response.status(200).send();
})

server.listen(3000);