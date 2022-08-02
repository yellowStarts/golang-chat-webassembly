server:
	go run ./server/main.go

web-server:
	cd webSocketServer \
	&& node webSocketServer.js

.PHONY:server up web-server