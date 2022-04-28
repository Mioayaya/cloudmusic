<template>
    <div class="musictop" v-if="listdata.musiclistData.playlist.id">
        <div class="left">
            <!-- 左边是一个歌单图片 -->
            <img :src="listdata.musiclistData.playlist.coverImgUrl" alt="">
        </div>
        <div class="right">
            <div class="right-1">
                <!-- [歌单] 歌单标题-->
                <span class="icon">歌单</span>
                <span class="title">{{ listdata.musiclistData.playlist.name}}</span>
            </div>
            <div class="right-2">
                <!-- 作者头像、名字、创建日期 -->
                <img :src="listdata.musiclistData.playlist.creator.avatarUrl" alt="" class="avatar">
                <span class="name">{{listdata.musiclistData.playlist.creator.nickname}}</span>
                <span class="date">{{ getTime(listdata.musiclistData.playlist.createTime) + "创建" }}</span>
            </div>
            <div class="right-3">
                <!-- 播放全部按钮、收藏、分享、下载全部 -->
                <div class="icon-1">
                    <span>{{'▷ 播放全部 +'}}</span>
                </div>
                <div class="icon-2 iconbox">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tianjiawenjianjia"></use>
                    </svg>
                    <span>{{' 收藏('+changeCount(listdata.musiclistData.playlist.subscribedCount)+')'}}</span>
                </div>
                <div class="icon-3 iconbox">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fenxiang2"></use>
                    </svg>
                    <span>{{' 分享('+changeCount(listdata.musiclistData.playlist.shareCount)+')'}}</span>
                </div>
                <div class="icon-4 iconbox">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiazai"></use>
                    </svg>
                    <span>下载全部</span>
                </div>
            </div>
            <div class="right-4">
                <!-- 标签 -->
                <span>{{'标签 :'}}</span>
                <span class="tags" v-for="(item,i) in listdata.musiclistData.playlist.tags" :key="i">
                    <span class="tag">{{item}}</span>
                    <span v-if="i!=listdata.musiclistData.playlist.tags.length-1">{{' /'}}</span>
                </span>
            </div>
            <div class="right-5">
                <!-- 歌曲、播放 -->
                <span>{{'歌曲 :'}}</span>
                <span class="song-num num">{{listdata.musiclistData.playlist.trackCount}}</span>
                <span>{{'播放 :'}}</span>
                <span class="play-num num">{{changeCount(listdata.musiclistData.playlist.playCount)}}</span>
            </div>
            <div class="right-6">
                <!-- 简介 -->
                <span class="des">{{'简介 :'}}</span>
                <span class="description">{{listdata.musiclistData.playlist.description}}</span>
            </div>
        </div>
    </div>
    <div class="musictop-nav" v-else>
        <div class="left"></div>
        <div class="right">
            <div class="right-1"></div>
            <div class="right-n"></div>
            <div class="right-n"></div>
            <div class="right-2"></div>
            <div class="right-2"></div>
        </div>
    </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "@vue/runtime-core";

const listdata = inject('listdata');
const getTime = (ms) => {
    let odate = new Date(ms);
    let oYear = odate.getFullYear();
    let oMonth = odate.getMonth() + 1;
    let oDay = odate.getDay();
    if(oMonth<10) {
        oMonth = '0'+oMonth;
    }
    if(oDay<10) {
        oDay = '0' + oDay;
    }
    let oCreate = oYear + '-' + oMonth + '-' + oDay;
    return oCreate;
}

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


</script>

<style lang="less">
.musictop {
    padding-top: 20px;
    padding-right: 20px;
    display: flex;

    .left {
        img {
            width: 232px;
            height: 232px;
            border-radius: 5px;
        }
    }

    .right {
        padding-left: 20px;

        .right-1 {
            position: relative;
            display: flex;
            justify-content: left;
            align-items: center;

            .icon {
                color: #d03c3c;
                border: #d03c3c 1px solid;
                padding: 0 3px;
                margin-top: -0.1vh;
            }

            .title {
                margin-left: 10px;
                font-size: 25px;
                color: #d0d0d0;
            }
        }

        .right-2 {
            margin-top: 5px;

            .avatar {
                width: 25px;
                height: 25px;
                border-radius: 50%;
            }
            .avatar {
                cursor:pointer;
            }
            .name {
                margin: 0 10px;
                color:#85b9e6;
                line-height: 25px;
            }
            .name:hover {
                color:#b3cee5;
                cursor:pointer;
            }
        }
        .right-3 {
            margin-top: 10px;
            display: flex;
            align-items: center;
            .icon {
                width: 20px;
                height: 20px;
            }
            .icon-1 {
                width: 100px;
                padding: 5px 8px 5px 15px;
                color: #fff;
                background: #ec4141;
                border-radius: 25px;
            }
            .icon-1:hover {
                cursor:pointer;
            }
            .iconbox {
                margin-left: 10px;
                border: 1px solid #eee;
                padding: 3px 10px;
                border-radius: 25px;
            }
            .iconbox:hover {
                cursor:pointer;
            }
        }
        .right-4 {
            margin-top: 10px;
            .tags {
                margin-left: 5px;
                .tag {
                    color: #85b9e6;
                }
                .tag:hover {
                    color:#b3cee5;
                    cursor:pointer;
                }
            }
            span {
                font-size: 13px;
            }
        }
        .right-5 {
            margin-top: 10px;
            .num {
                margin: 0 5px;
                color: #7e7e7e;
            }
            .song-num {
                margin-right: 15px;
            }
            span {
                font-size: 13px;
            }
        }
        .right-6 {
            display: flex;
            margin-top: 10px;
            .des {
                height: 20px;
            }
            .description {
                width: 45vw;
                height: 60px;
                margin-left: 5px;
                color: #7e7e7e;
                overflow: hidden;
                display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
            }
            span {
                font-size: 13px;
                line-height: 20px;
            }
        }

    }

}

.musictop-nav {
    padding-top: 20px;
    padding-right: 20px;
    display: flex;
    .left {
        width: 232px;
        height: 232px;
        background-color: #a1a2a4;
        border-radius: 5px;
    }
    .right {
        padding-left: 20px;
        .right-1 {
            width: 500px;
            height: 35px;
            background-color: #f0f2f5c0;
            border-radius: 20px;
        }
        .right-n {
            margin-top: 25px;
            width: 500px;
            height: 18px;
            background-color: #f0f2f5c0;
            border-radius: 20px;
        }
        .right-2 {
            margin-top: 25px;
            width: 750px;
            height: 18px;
            background-color: #f0f2f5c0;
            border-radius: 20px;
        }
    }
}
</style>