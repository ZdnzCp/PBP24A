import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

client.connect(('127.0.0.1', 5000))
print("Terhubung ke server.")

message = input("Masukkan pesan: ")
client.send(message.encode())

reply = client.recv(1024).decode()
print("Balasan dari server:", reply)

client.close()
