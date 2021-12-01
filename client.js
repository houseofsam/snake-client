const net = require('net');

// establish connection with game server

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    conn.write('Name: SAM');


  });

  return conn;
};

module.exports = { connect };