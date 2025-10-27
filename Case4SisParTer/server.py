import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server.bind(('127.0.0.1', 5000))
server.listen(1)

print("Server berjalan, menunggu koneksi...")

conn, addr = server.accept()
print("Terhubung dengan:", addr)

data = conn.recv(1024).decode()
print("Pesan dari client:", data)

reply = "Pesan diterima oleh server."
conn.send(reply.encode())

conn.close()
server.close()
print("Koneksi ditutup.")
