#comment : add local ip address if desired at the end
#verify if the path to appdata local is correct
#run as admin

..\..\AppData\Local\mkcert\mkcert-v1.4.4-windows-amd64.exe -install -key-file .\certificates\localhost-key.pem -cert-file .\certificates\localhost.pem localhost 127.0.0.1 ::1