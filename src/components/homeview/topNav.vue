<template>
    <div class="topnav">
        <!-- 左上角的图片 -->
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyiyun"></use>
            </svg>
            <span class="text">网易云音乐</span>
            <!-- 搜索框 -->
            <div class="middle">
                <!-- 搜索栏 -->
                <div class="serach">
                    <!-- 搜索图标 -->
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo1"></use>
                    </svg>
                    <!-- 搜索框 -->
                    <div class="input">
                        <input placeholder="">
                    </div>
                </div>
            </div>
        </div>

        <!-- 列表组 -->
        <div class="right">
            <!-- 登录头像 -->
            <div class="avatar" v-if="userdata.avatar">
                <img :src="userdata.avatar" alt="">
            </div>
            <!-- 未登录头像 -->
            <div class="avatar" v-if="!userdata.avatar">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yonghutouxiang"></use>
                </svg>
            </div>
            <!-- 用户名字+倒三角 -->
            <div class="username">
                <span class="name-text">{{ userdata.name + ' ▼' }}</span>
            </div>
            <!-- 换肤 -->
            <div class="skin">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yifu"></use>
                </svg>
            </div>
            <!-- 设置 -->
            <div class="settings icon-list">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shezhi"></use>
                </svg>
            </div>
            <!-- 私信 -->
            <div class="messages icon-list">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sixin"></use>
                </svg>
            </div>
            <!-- 最小化 -->
            <div class="mini icon-list">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuixiaohua"></use>
                </svg>
            </div>
            <!-- 最大化 -->
            <div class="max icon-list">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuidahua"></use>
                </svg>
            </div>
            <!-- 关闭 -->
            <div class="close icon-list">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </div>
        </div>
    </div>
    <div class="redline" style="background: #b72525; width:100%; height: 2px">

    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const userdata = reactive({
    avatar: '',
    name: '未登录',
})
</script>

<style lang="less" scoped>
.topnav {
    width: 100%;
    height: 65px;
    background-color: black;
    display: flex;
    position: relative;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;
    padding-right: 10px;

    .left {
        position: relative;
        color: white;
        justify-content: left;
        display: flex;
        margin-top: 8px;
        .icon {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }

        .text {
            font-size: 18px;
            line-height: 30px;
        }
    }

    .middle {
        margin-left: 150px;
        margin-top: -5px;
        .serach {
            position: relative;
            background-color: #2a2a2d;
            width: 180px;
            height: 35px;
            border-radius: 21px;
            display: flex;
            padding-left: 5px;

            .icon {
                fill: currentColor;
                color: #cdcdcd;
                width: 20px;
                height: 20px;
                margin-top: 9px;
                margin-left: 5px
            }

            .input {
                input {
                    width: 100px;
                    margin-left: 5px;
                    margin-top: 10px;
                    font-size: 1.5em;
                    color: white;
                    background-color: #2a2a2d;
                    border: 1px solid #2a2a2d;
                    outline: none;
                }
            }
        }
    }

    .right {
        display: flex;
        color: #a5a7a8;

        .icon {
            fill: currentColor;
            color: #a5a7a8;
            width: 20px;
            height: 20px;
        }

        .avatar {
            margin-right: 10px;
            img {
                object-fit: cover;
                border-radius: 50%;
                width: 35px;
                height: 35px;
            }
            .icon {
                width: 30px;
                height: 30px;
            }
        }

        .username {
            margin-right: 20px;

            span {
                line-height: 30px;
            }
        }

        .skin {
            margin-right: 20px;

            .icon {
                width: 25px;
                height: 25px;
            }
        }

        .icon-list {
            margin-top: 3px;
            margin-right: 20px;
        }
    }
}
</style>