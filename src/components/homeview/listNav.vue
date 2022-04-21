<template>
    <el-scrollbar height="633px">
        <el-menu class="el-menu-vertical-demo" default-active="1" @open="handleOpen" @close="handleClose">
            <!-- 发现音乐等 -->
            <el-menu-item class="top" v-for="(item, i) in listItem.top" :key="item.id" :index="item.id + ''">
                <span>{{ item.name }}</span>
            </el-menu-item>
            <!-- 分割提示 '我的音乐' -->
            <el-menu-item id="my-music" index="my-music" disabled>
                <span>我的音乐</span>
            </el-menu-item>
            <!-- 我的音乐内容 -->
            <el-menu-item class="content" v-for="(item, i) in listItem.person" :key="item.id" :index="item.id + ''">
                <span>{{ item.name }}</span>
            </el-menu-item>

            <el-sub-menu index="12 ">
                <template #title>
                    <span>创建的歌单</span>
                    <span class="add-more" @click="addlist">+</span>
                </template>
                <el-menu-item class="create" v-for="(item,i) in userdata.createList" :key="item.id" :index="item.id+''">
                    <span>{{item.name}}</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="13 ">
                <template #title>
                    <span>收藏的歌单</span>
                </template>

            </el-sub-menu>
        </el-menu>
    </el-scrollbar>

</template>

<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { reactive } from '@vue/reactivity'

const listItem = reactive({
    top: [
        { id: 1, name: '发现音乐', path: '/home' },
        { id: 2, name: '播客', path: '/home' },
        { id: 3, name: '视频', path: '/home' },
        { id: 4, name: '关注', path: '/home' },
        { id: 5, name: '直播', path: '/home' },
        { id: 6, name: '私人FM', path: '/home' },
    ],
    person: [
        { id: 7, name: '本地与下载', path: '/home', icon: '' },
        { id: 8, name: '最近播放', path: '/home', icon: '' },
        { id: 9, name: '我的音乐云盘', path: '/home', icon: '' },
        { id: 10, name: '我的播客', path: '/home', icon: '' },
        { id: 11, name: '我的收藏', path: '/home', icon: '' },
    ]
})

const userdata = reactive({
    id: '',
    name: '',
    createList: [
        { id: 12, name: '我喜欢的音乐', path: '/home', icon: '' },
    ],
    likeList: [

    ],
})

const addlist = () => {
    if(!userdata.id) {
        alert('请先登录')
    } else {
        alert('增加歌单!');
    }
}

</script>

<style lang="less" scoped>
.el-scrollbar {
    background-color: #2b2b2b;
    width: 200px;
    padding: 0;
}

.el-menu-vertical-demo {
    background-color: #2b2b2b;
    color: #fff;

    // 共享
    .el-menu-item {
        height: 40px;
    }

    .el-menu-item:hover {
        background-color: #333333;
    }

    // 只有top点击才会放大
    .top.is-active {
        background-color: #333333;
        span {
            font-size: 1.5em;
        }
    }
    .content.is-active {
        background-color: #333333;
    }

    // 展开项里面
    .el-sub-menu {
        // 未点击
        .el-menu-item {
            background-color: #2b2b2b;
            color: #fff;
        }
        // 移动到上面
        .el-menu-item:hover {
            background-color: #333333;
            color: #fff;
        }
        // 点击
        .el-menu-item.is-active {
            background-color: #333333;
            color: #fff;
        }

    }
    // 创建的歌单
    :deep(.el-sub-menu__title) {
        span {
            color: #7c7c7c;
        }
        .add-more {
            color: #fff;
            position: absolute;
            right: 20px;
            font-size: 1.2em;
        }
        .el-sub-menu__icon-arrow {
            right: 90px;
            color: #7c7c7c;
        }
    }
    .el-sub-menu:hover {
        background-color: #2b2b2b;
    }
    :deep(.el-sub-menu__title):hover {
        background-color: #2b2b2b;
    }

    #my-music {
        font-size: 0.8em;
    }

    span {
        color: #fff;
        font-size: 1em;
    }
}
</style>
