# Big-Screen

数据大屏可视化

# 功能

使用echarts来分析各种结构的json文件以实现数据大屏

# 代码依赖

1. 代码含有echarts和jquery，可直接下载

2. 需要安装node，下载地址为：http://nodejs.org/zh-cn/。配置环境变量后在终端(CMD)或powershell输入 node --version查看是否安装成功

3. 在命令行中cd到项目目录下初始化项目和安装依赖：

   ​	cd 你的项目目录路径
   	npm init -y
   	npm install express   --如果下载缓慢可以使用：npm install express --registry=https://registry.npmmirror.com转到国内源下载

4. 运行服务器：node server.js

# 效果展示

![image](https://github.com/cruiqi/echarts_bigScreen/blob/main/demo.png)

# 代码逻辑

使用server.js创建路由，浏览器访问