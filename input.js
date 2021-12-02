let connection;

const handleUserInput = function(key) {
  switch (key) {
    case '\u0003': process.exit();
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 'h':
      connection.write('Say: Hello!');
      break;
    case 's':
      connection.write('Beat my score!');
    case 'b':
      connection.write('I\'m the best!');
    
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };