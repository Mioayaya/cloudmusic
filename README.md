# Vue3.2 仿网易云web端

# 技术栈
- html/js/css/less
- vue3.2 vite setup语法糖

# 使用方法

# 问题记录

|问题描述|解决方案|
|-----|-----|
| 如何修改vite的运行端口 | 在package.json中 scripts添加 "start": "vite --port 8000",|
| 如何修改svg中的颜色 | css中增加以下属性 fill: currentColor;color: #cdcdcd; |
| 去掉input点击时的边框 | outline: none; |
| 使用v-for渲染导航栏是出现 'index'的warning | elementui需要一个字符串,使用字符串拼接即可解决 |
| 如何去掉表格间的空隙? | table {border-collapse:collapse;} |

# BUG记录

Q: 使用全局变量报错 Cannot read properties of undefined (reading ‘dispatch‘)  
A: stroe文件没有在main.js中导入
