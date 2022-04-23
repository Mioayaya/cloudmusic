<template>
    <!-- 推荐歌单 -->
    <div class="recommend">
        <div class="top">
            <!-- 推荐歌单 -->
            <span>{{ '推荐歌单 >' }}</span>
        </div>
        <div class="content">
            <!-- 歌单列表、选取10个 -->
            <router-link :to="{path:'/musiclist',query:{id:item.id}}" class="song-list" v-for="(item,i) in recommendlist.list" :key="item.id" :style="{marginRight:((i===4||i===9)?0:'')}">
                <img :src="item.picUrl" alt="">
                <span class="name">{{item.name}}</span>
                <div class="playCount">
                    {{ "▷ "+ changeCount(item.playCount) }}
                </div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
            </router-link>
        </div>
    </div>


</template>

<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import { getRecommendList } from "../../../../api";

const recommendlist = reactive({
    list: [
        {}
    ],
})

const changeCount = (num) => {
    let res = num;
    if(num>100000000){
        res = num/100000000;
        res = res.toFixed(2) + '亿';
    }else if(num>10000){
        res = num/10000;
        res = res.toFixed(2) + '万';
    }
    return res;
}

onMounted(async () => {
    let res = await getRecommendList(10);
    console.log(res);
    recommendlist.list = res.data.result;
})
</script>

<style lang="less" scoped>
.recommend {
    .top {
        span {
            font-size: 18px;
            font-weight: 500;
        }
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        position: relative;
        padding-top: 10px;
        .song-list {
            display: flex;
            justify-content: last baseline;
            flex-direction: column;
            margin-right: 54px;
            width: 180px;
            height: 245px;
            border-radius: 5px;
            position: relative;
            img {
                width: 100%;
                height: auto;
                border-radius: 5px;
            }
            .name {
                font-size: 15px;
                height: 45px;
                overflow: hidden;
                display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
            }
            .playCount {
				color: white;
				position:absolute;
				right: 0.07rem;
				top: 0.07rem;
				font-size: 0.2rem;
				text-align: center;
				padding: 0 5px;
            }
            .icon {
                width: 30px;
                height: 30px;
                fill: currentColor;
                color: #cdcdcd;
                position: absolute;
                right: 1rem;
                bottom: 7.5rem;
                display: none;
            }
        }
        .song-list:hover {
            .icon {
                width: 30px;
                height: 30px;
                fill: currentColor;
                color: #cdcdcd;
                position: absolute;
                right: 1rem;
                bottom: 7.5rem;
                display: block;
            }
        }
        
    }
}

</style>