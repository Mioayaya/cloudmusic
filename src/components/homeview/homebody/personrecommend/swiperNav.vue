<template>
    <div class="swiper">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,i) in swiperPic.pic" :key="item.id">
                <img :src="item.imageUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
    
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { getBanner } from "../../../../api/index";

const swiperPic = reactive({
    pic:[
        {}
    ],
})

onMounted(async() => {
    let result = await getBanner(0);
    console.log(result);
    swiperPic.pic = result.data.banners;
})
</script>

<style scoped>
.swiper {
    padding-right: 7vw;
}
img {
    display: block;
    width: 100% !important;
    height: auto;
    border-radius: 0.1rem;
    object-fit: cover;
}
.el-carousel__item {
    border-radius: 5px;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
