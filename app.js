/*importar as configuração do servidor*/
var app = require('./config/server');

/*parametrizar a porta de escuta*/
var server = app.listen(80,function(){
	console.log('Servidor On-line');
});

var io = require('socket.io').listen(server);

/* definindo variavel de ambiente*/
app.set('io', io);

/* criar a conexão para o WebSocket */
io.on('connection', function(socket){
	console.log('Usuario conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});
});