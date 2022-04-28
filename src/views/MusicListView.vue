<template>
    <div class="music">
        <TopNav></TopNav>
        <div class="content">
            <ListNav></ListNav>
            <MusicBody></MusicBody>
        </div>
    </div>
</template>

<script setup>
import TopNav from '../components/homeview/topNav.vue';
import ListNav from '../components/homeview/listNav.vue';
import MusicBody from '../components/musiclistview/musicBody.vue';


</script>

<style lang="less" scoped>
.content {
    display: flex;
    flex-direction: row;
}
</style>