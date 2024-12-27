const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname)));

// 设置路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', '数据大屏.html'));
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 