<template>
    <div class="home">
        <top-nav></top-nav>
        <div class="content">
            <list-nav></list-nav>
            <home-body></home-body>
        </div>
    </div>
</template>

<script setup>
import TopNav from '../components/homeview/topNav.vue'
import ListNav from '../components/homeview/listNav.vue';
import HomeBody from '../components/homeview/homeBody.vue';

</script>

<style lang="less" scoped>
.content {
    display: flex;
    flex-direction: row;
}



</style>