'use strict';

const Hapi = require('hapi');
const routes = require('./routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
});

server.route(routes);

const init = async () => {
  await server.start();
  console.log('Server running at:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log('Unhandled error:', err);
  process.exit(1);
});

init();
