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

    setTimeout(() => {
      conn.write('Move: up');
    }, 500)
    setTimeout(() => {
      conn.write('Move: up');
    }, 550)
    setTimeout(() => {
      conn.write('Move: up');
    }, 600)
    setTimeout(() => {
      conn.write('Move: up');
    }, 650)
    setTimeout(() => {
      conn.write('Move: up');
    }, 700)
  });

  return conn;
};

module.exports = { connect };