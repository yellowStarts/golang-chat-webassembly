// 导入 ws 模块
const WebSocketServer = require('ws');

// 创建 一个 websocket 服务器
const wss = new WebSocketServer.Server({ port: 8000 })

// 使用 websocket 创建连接
wss.on('connection', ws => {
    console.log('new client connected');
    // 发生消息
    ws.on('message', data => {
        console.log(`Client has sent us: ${data}`)
    });
    // 处理当客户端从服务器断开连接时要做的事情
    ws.on('close', () => {
        console.log('the client has connected')
    });
    // 处理客户端连接错误
    ws.onerror = function () {
        console.log('Some Error occurred')
    }
});

console.log('The WebSocket server is running on port 8080');