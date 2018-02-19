const Hapi = require('hapi');
const Routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(3002),
});

server.route(Routes);
// server.start();
module.exports = server;
