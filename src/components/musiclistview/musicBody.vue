<template>
    <div class="musiclist-body">
        <el-scrollbar height="74.7vh">
            <MusicTop/>
        </el-scrollbar>
        
    </div>
</template>

<script setup>import { useRoute } from 'vue-router';
import { onMounted, provide, reactive } from '@vue/runtime-core';
import { getPlaylistDetail } from '../../api';
import MusicTop from './musicbody/musicTop.vue';
const route = useRoute();
// 歌单信息
const musiclistData = reactive({
    list:[],
    playlist:{
        creator:{}
    }
})

provide('listdata',{
    musiclistData,
})

onMounted(async() => {
    let res = await getPlaylistDetail(route.query.id);
    // console.log(res);
    musiclistData.playlist = res.data.playlist;
})

</script>

<style lang="less" scoped>
.musiclist-body {
    width: 100vw;
    height: 85vh;
    background-color: #2b2b2b;
    padding-left: 30px;
    color: #fff;
}
</style>