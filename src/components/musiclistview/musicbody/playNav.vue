<template>
    <!-- 歌曲列表、评论、收藏者 -->
    <div class="play-nav">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="歌曲列表"   name="first">
                <Playlist/> 
            </el-tab-pane>
            <el-tab-pane :label="`评论(${listdata.musiclistData.playlist.commentCount||'···'})`" name="second">评论列表</el-tab-pane>
            <el-tab-pane label="收藏者" name="third">收藏者</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
import Playlist from './playlist.vue';

const activeName = ref('first');
const listdata = inject('listdata');

</script>

<style lang="less" scoped>
.play-nav {
    margin-top: 20px;
}
.demo-tabs {
    color: #d0d0d0;
}
// 顶部标签页的颜色
:deep(.el-tabs__item) {
    color: #d0d0d0;
}
// 下面的线 修改为透明
:deep(.el-tabs__nav-wrap)::after {
    background: rgba(0, 0, 0, 0)
}

// 点击后的标签页
:deep(.el-tabs__item).is-active {
    font-size: 18px;
    font-weight: 600;
}
:deep(.el-tabs__active-bar) {
    background-color: #ff0000;
}
</style>