// 表明是node可执行文件
// #!/usr/bin/env node

// 引入上面导出的app实例
var app = require('../app');

// 引入debug模块，打印调试日志
var debug = require('debug')('blog:server');
var http = require('http');

// 设置端口号
var port = '3001';
app.set('port', port);

// 启动工程
var server = http.createServer(app);

// 监听端口号
server.listen(port);
server.on('error', () => {
    console.log('server error' );
});
server.on('listening', () => {
    console.log('server listening');
});
