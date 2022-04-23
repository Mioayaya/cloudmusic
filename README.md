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

# BUG记录

Q: 使用全局变量报错 Cannot read properties of undefined (reading ‘dispatch‘)  
A: stroe文件没有在main.js中导入

# 导报记录
- npm i vue-router -S   路由相关
- npm i less -S         less
- npm i element-plus -S 饿了么ui
- npm i axios -S        axios
- npm i vuex -S         全局变量相关

# 日志
- 2022/04/17
  - 顶部标题栏中logo的实现
- 2022/04/21
  - 顶部导航栏的ui实现
  - 侧边导航栏以及点击效果
- 2022/04/22
  - 推荐页面的简单实现
  - 分页选择
  - 轮播图实现
  - 推荐歌单
- 2022/04/23
  - 实现歌单的跳转以及顶部的布局
  - 左侧列表切换页面的，也能保存active
  - 部分逻辑优化 
# 后记