<template>
    <div class="musiclist-body">
        <el-scrollbar height="84.7vh">
            <MusicTop/>
            <PlayNav/>
        </el-scrollbar>
        
    </div>
</template>

<script setup>import { useRoute } from 'vue-router';
import { onMounted, provide, reactive } from '@vue/runtime-core';
import { getPlaylistAll, getPlaylistDetail } from '../../api';
import MusicTop from './musicbody/musicTop.vue';
import Playlist from './musicbody/playlist.vue';
import PlayNav from './musicbody/playNav.vue';
const route = useRoute();
// 歌单信息
const musiclistData = reactive({
    list:[],
    playlist:{
        creator:{}
    },
    playlistAll:{

    }
})

provide('listdata',{
    musiclistData,
})

onMounted(async() => {
    let res = await getPlaylistDetail(route.query.id);
    // console.log(res);
    musiclistData.playlist = res.data.playlist;
    res = await getPlaylistAll(route.query.id);
    // console.log(res);
    musiclistData.playlistAll = res.data;
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