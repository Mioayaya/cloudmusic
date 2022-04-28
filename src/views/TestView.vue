<template>
    <div class="test">
        <TopNav/>
        <div class="content">
            <ListNav/>
            <span>测试view</span>
        </div>
    </div>
</template>

<script setup>
import TopNav from '../components/homeview/topNav.vue';
import ListNav from '../components/homeview/listNav.vue';

</script>

<style lang="less" scoped>
.content {
    display: flex;
    flex-direction: row;
}
</style>