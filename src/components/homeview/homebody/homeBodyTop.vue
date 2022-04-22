<template>
    <div class="home-top">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="个性推荐"   name="first">
                    <PerRecomdCont/>
            </el-tab-pane>
            <el-tab-pane label="专属定制" name="second">专属定制</el-tab-pane>
            <el-tab-pane label="歌单"   name="third">歌单</el-tab-pane>
            <el-tab-pane label="排行榜"   name="fourth">排行榜</el-tab-pane>
            <el-tab-pane label="歌手"   name="fifth">歌手</el-tab-pane>
            <el-tab-pane label="最新音乐"   name="sixth">最新音乐</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PerRecomdCont from './perRecomdCont.vue';
const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>
.demo-tabs {
    color: #fff;
}
// 顶部标签页的颜色
:deep(.el-tabs__item) {
    color: #fff;
}
// 下面的线 修改为透明
:deep(.el-tabs__nav-wrap)::after {
    background: rgba(0, 0, 0, 0)
}

// 点击后的标签页
:deep(.el-tabs__item).is-active {
    font-size: 18px;
}
:deep(.el-tabs__active-bar) {
    background-color: #ff0000;
}
</style>