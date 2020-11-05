var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Entrou na funcão de conexão')
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string com o endereco do servidor
            27017, //porta de conexao
            {}
        ),
        {}
    );
    return db;
}

module.exports = function(){
    return connMongoDB;
}
