<template>
    <div class="person-content">
        <el-scrollbar height="74.7vh">
            <SwiperNav/>
            <RecomdList/>
        </el-scrollbar>
            
    </div>
</template>

<script setup>
import SwiperNav from './personrecommend/swiperNav.vue';
import RecomdList from './personrecommend/recomdList.vue';

</script>

<style lang="less" scoped>
.person-content {
    padding: 3vh 0 0 7vw;
    width: 100%;
    height: auto;

}
</style>