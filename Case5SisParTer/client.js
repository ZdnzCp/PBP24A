const net = require('net');
const readline = require('readline');

const client = new net.Socket();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

client.connect(3000, '127.0.0.1', () => {
  console.log('Terhubung ke server.');
  console.log('Ketik pesan dan tekan Enter untuk mengirim.');
});

client.on('data', (data) => {
  console.log('\n' + data.toString().trim());
  rl.prompt(true);
});

rl.on('line', (input) => {
  client.write(input);
});

client.on('close', () => {
  console.log('Koneksi ditutup.');
  process.exit(0);
});

client.on('error', (err) => {
  console.log('Terjadi error:', err.message);
});
