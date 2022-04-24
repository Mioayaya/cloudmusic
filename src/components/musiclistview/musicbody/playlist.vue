<template>
    <!-- 歌单列表 -->
    <div class="playlist">
        <!-- 操作、标题、歌手、专辑、时间 -->

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="top-1">操作</th>
                    <th scope="col" class="top-2 top">标题</th>
                    <th scope="col" class="top-3 top">歌手</th>
                    <th scope="col" class="top-4 top">专辑</th>
                    <th scope="col" class="top-5 top">时间</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tr" v-for="(item,i) in listdata.musiclistData.playlistAll.songs" :key="item.id" 
                :style="{backgroundColor:(i%2?'#2b2b2b':'#2e2e2e')}" :class="{active:(isActive===item.id)}" @click="changeClass(item.id)">
                    <th scope="row" class="row-1 td">
                        <span>{{(i+1)>9?i+1:'0'+(i+1)}}</span>
                        <div class="iconlist">
                            <!-- 点击红色、需要登录，暂时先不做 -->
                            <!-- 
                            <svg class="icon" id="icon-like" aria-hidden="true">
                                <use xlink:href="#icon-xihuan-shi"></use>
                            </svg> 
                            -->
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xihuan-shi"></use>
                            </svg>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xiazai1"></use>
                            </svg>
                        </div>
                    </th>
                    <!-- 歌曲标题 -->
                    <td class="row-2 td">{{item.name}}</td>
                    <!-- 歌手 -->
                    <td class="row-3 row-name td">
                        <span v-for="(author,j) in item.ar" :key="author.id">
                            <span class="name">{{ author.name }}</span>
                            <span v-if="j!=item.ar.length-1">{{'/'}}</span>
                        </span>
                    </td>
                    <!-- 专辑 -->
                    <td class="row-4 row-name td">
                        <span class="name">{{item.al.name}}</span>
                    </td>
                    <!-- 时间 -->
                    <td class="time td">{{getSongTime(item.dt)}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import { inject, ref } from "@vue/runtime-core";
const listdata = inject('listdata');
const isActive = ref('');

const changeClass = (active) => {
    isActive.value = active;
}

const getSongTime = (dt) => {
    let oSeconds = dt/1000;
    let oMinutes =Math.trunc(oSeconds/60);
    oSeconds = Math.trunc(oSeconds%60);
    oMinutes<10?oMinutes='0'+oMinutes:oMinutes=oMinutes;
    oSeconds<10?oSeconds='0'+oSeconds:oSeconds=oSeconds;
    return (oMinutes+':'+oSeconds);
}
</script>

<style lang="less" scoped>
.playlist {
    padding-right: 10px;
}
.table {
    border-style: none;
    border-collapse:collapse;
    color: #2b2b2b;
    table-layout: fixed;
    word-break: break-all;
    .top-1 {
        // 操作
        padding-left: 5%;
        width: 10%;
        color: #888888;
        cursor:context-menu;
    }
    .top-2 {
        // 标题
        width: 33%;
    }
    .top-3 {
        // 作者
        width: 20%;
    }
    .top-4 {
        // 专辑
        width: 27%;
    }
    .top-5 {
        // 时间
        width: 10%;
    }
    .top {
        color: #888888;
        font-size: 13px;
    }
    .top:hover {
        background: #373737;
        cursor:pointer;
    }
    .tr {
        color: #525252;
        height: 28px;
        .row-1 {
            display: flex;
            position: relative;
            cursor:context-menu;
            span {
                margin-left: 25px;
            }
            .iconlist {
                position: absolute;
                right: 10px;
                .icon {
                    margin-right: 10px;
                    width: 20px;
                    height: 20px;
                    fill: currentColor;
                    color: #494949;
                }
                .icon:hover {
                    color: #979797;
                    cursor: pointer;
                }
                #icon-like {
                    fill: currentColor;
                    color: #d73535;
                }
            }
        }
        .row-2 {
            color:#d3d3d3;
            cursor:context-menu;
        }
        
        .row-name {
            color: #898989;
            .name:hover {
                color: #b4b4b4;
                cursor:pointer;
            }
        }
        .time {
            color:#6f6f6f;
        }
    }

    .tr:hover {
        background-color: #373737 !important;
        cursor:pointer;
    }
    
    .active {
        background-color: #3f3f3f !important;
    }
    
    
}
// 去掉表格横线
tbody, td, tfoot, th, thead, tr {
    border-style: none;
}
// 去掉表头
table {
    border-collapse:separate;
}
</style>