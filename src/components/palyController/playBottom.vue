<template>
    <div class="play">
        <!-- 左 中 右 布局 -->
        <div class="left">
            <!-- 左边是pic+title/红心+作者 -->
            <div class="pic" v-if="playdata.state">
                <img :src="playdata.item.al.picUrl" alt="">
            </div>
            <div class="pic" v-else></div>
            <div class="desc">
                <div class="top">
                    <span class="title" v-if="playdata.state">{{ playdata.item.name}}</span>
                    <span class="titleNaN" v-else></span>
                    <!-- 点击红色、需要登录，暂时先不做 -->
                    <!-- 
                    <svg class="icon" id="icon-like" aria-hidden="true">
                        <use xlink:href="#icon-xihuan-shi"></use>
                    </svg> 
                    -->
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xihuan-shi"></use>
                    </svg>

                </div>
                <span class="author" v-if="playdata.state">{{ playdata.item.ar[0].name }}</span>
                <span class="authorNaN" v-else></span>
            </div>
        </div>
        <div class="middle">
            <!-- 中间部分是由 播放按钮+进度条 -->
            <div class="top">
                <div class="iocnlist" v-if="playdata.state">
                    <!-- 上一首、播放/暂停、下一首 -->
                    <svg class="icon" aria-hidden="true" @click="lastplay">
                        <use xlink:href="#icon-lastplay"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" @click="playStop">
                        <use :xlink:href="icondate.play"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" @click="nextplay">
                        <use xlink:href="#icon-xiayishou"></use>
                    </svg>
                </div>
                <div class="iocnlist" v-else>
                    <!-- 上一首、播放/暂停、下一首 -->
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-lastplay"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="icondate.play"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiayishou"></use>
                    </svg>
                </div>
            </div>
            <div class="bottom">
                <span class="start">00:00</span>
                <div class="progress" v-if="playdata.state">
                    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playdata.item.id}.mp3`"></audio>            
                </div>
                <div class="progreessNaN" v-else></div>
                <span class="end" v-if="playdata.state">{{ getSongTime(playdata.item.dt) }}</span>
                <span class="end" v-else>00:00</span>
            </div>
        </div>
        
        <div class="right">
                <span class="desc">标准</span>
                <div class="iconlist">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jingyu"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shengyin"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-friend"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gedanliebiao"></use>
                    </svg>
                </div>
            </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
const store = useStore();
const playdata = reactive({
    state: false,
    item: {}
})
const audio = ref(null);
const icondate = reactive({
    playState: true,
    play: '#icon-bofang1',
})

const playStop = () => {
    icondate.playState = !icondate.playState;
    if(icondate.playState) {
        icondate.play = '#icon-bofang1';
        audio.value.pause();
    }else {
        icondate.play = '#icon-zanting1';
        audio.value.play();
    }
}
// 切换上一首
const lastplay = () => {
    if(store.state.playId !== 0) {
        store.state.playCurrentIndex = store.state.playlist[store.state.playId-1];
        store.state.playId -= 1;
    }
}

// 切换下一首
const nextplay = () => {
    if(store.state.playId !== store.state.playlist.length-1) {
        store.state.playCurrentIndex = store.state.playlist[store.state.playId+1];
        store.state.playId += 1;
    }
}

// 获取歌曲时间
const getSongTime = (dt) => {
    let oSeconds = dt/1000;
    let oMinutes =Math.trunc(oSeconds/60);
    oSeconds = Math.trunc(oSeconds%60);
    oMinutes<10?oMinutes='0'+oMinutes:oMinutes=oMinutes;
    oSeconds<10?oSeconds='0'+oSeconds:oSeconds=oSeconds;
    return (oMinutes+':'+oSeconds);
}

// 播放
const play = () => {
}

// 
onMounted(() => {
    // Dom元素渲染后分配给ref
    // console.log(audio);
})

// 监听
watch(()=> store.state.playCurrentIndex,(newvalue,oldvalue) => {
    playdata.item = newvalue;
    playdata.state = true;
    // console.log(newvalue);
    icondate.playState = true;
    icondate.play = '#icon-bofang1';
})
</script>

<style lang="less" scoped>
.play {
    background: #000;
    height: 6.75vh;
    width: 100%;
    padding: 1vh 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .left {
        display: flex;
        .pic {
            width: 38px;
            height: 38px;
            background-color: #c5c5c5;
            border-radius: 5px;
            position: relative;
        }
        img {
            width: 38px;
            height: 38px;
            border-radius: 5px;
            margin-right: 10px;
        }
        img:hover {
            filter: blur(2px);
            cursor: pointer;
        }
        .desc {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            .top {
                display: flex;
                .icon {
                    margin-left: 5px;
                    width: 20px;
                    height: 20px;
                    fill: currentColor;
                    color: #494949;
                }
                .icon:hover {
                    color: #979797;
                    cursor: pointer;
                }
                .title {
                    max-width: 180px;
                    height: 15px;
                    overflow: hidden;
                }
                .titleNaN {
                    width: 80px;
                    height: 15px;
                    background-color: #979797;
                    border-radius: 20px;
                }
            }
            .authorNaN {
                width: 40px;
                height: 15px;
                background-color: #979797;
                border-radius: 20px;
            }
            span {
                color :#c5c5c5;
            }
            span:hover {
                cursor: pointer;
            }
            .title:hover {
                    color :#fcfcfc;
            }
        }
    }
    .middle {
        position: absolute;
        left: 43%;
        .iocnlist {
            .icon {
                margin: 0 10px;
                width: 20px;
                height: 20px;
                fill: currentColor;
                color: #d4d4d4;
            }
            .icon:hover {
                cursor: pointer;
            }
        }
        .bottom {
            margin-left: -140px;
            display: flex;
            span {
                color: #fff;
                font-weight: 200;
                margin: 0 5px;
            }
            .progreessNaN {
                margin-top: 8px;
                width: 350px;
                height: 1.5px;
                background-color: #c5c5c5;
            }
        }
    }
    .right {
        margin-top: 10px;
        display: flex;
        .desc {
            width: 30px;
            height: 20px;
            border: 1px solid #d2d2d3;
            color: #d2d2d3;
            padding: 0 2px;
            cursor: pointer;
        }
        .icon {
            margin: 0 10px;
            width: 20px;
            height: 20px;
            fill: currentColor;
            color: #d2d2d3;
            cursor: pointer;
        }
    }
}
</style>