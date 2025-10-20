const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
  console.log('Client terhubung:', socket.remoteAddress);

  clients.push(socket);

  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log('Pesan diterima:', message);

    for (let client of clients) {
      if (client !== socket) {
        client.write(message + '\n');
      }
    }
  });

  socket.on('end', () => {
    console.log('Client keluar.');
    clients.splice(clients.indexOf(socket), 1);
  });

  socket.on('error', (err) => {
    console.log('Error:', err.message);
    clients.splice(clients.indexOf(socket), 1);
  });
});

server.listen(3000, () => {
  console.log('Server berjalan di port 3000...');
});
