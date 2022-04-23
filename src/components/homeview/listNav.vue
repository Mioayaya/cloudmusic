<template>
    <el-scrollbar height="85vh">
        <!-- default-active一开始的默认点击 -->
        <el-menu class="el-menu-vertical-demo" :default-active="nowActive" @open="handleOpen" @close="handleClose">
            <!-- 发现音乐等 -->
            <el-menu-item class="top" v-for="(item, i) in listItem.top" :key="item.id" :index="item.id + ''" @click="gotoView(item.path,item.active)">
                <span>{{ item.name }}</span>
            </el-menu-item>
            <!-- 分割提示 '我的音乐' -->
            <el-menu-item id="my-music" index="my-music" disabled>
                <span>我的音乐</span>
            </el-menu-item>
            <!-- 我的音乐内容 -->
            <el-menu-item class="content" v-for="(item, i) in listItem.person" :key="item.id" :index="item.id + ''" @click="gotoView(item.path,item.active)">
                <span>{{ item.name }}</span>
            </el-menu-item>

            <el-sub-menu index="12 ">
                <template #title>
                    <span>创建的歌单</span>
                    <span class="add-more" @click="addlist">+</span>
                </template>
                <el-menu-item class="create" v-for="(item,i) in userdata.createList" :key="item.id" :index="item.id+''" @click="gotoView(item.path,item.active)">
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
import { reactive, ref } from '@vue/reactivity'
import { inject } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

const listItem = reactive({
    top: [
        { id: 1, name: '发现音乐', path: '/home',active:'1', },
        { id: 2, name: '播客', path: '/test',active:'2' },
        { id: 3, name: '视频', path: '/home',active:'3' },
        { id: 4, name: '关注', path: '/home',active:'4' },
        { id: 5, name: '直播', path: '/home',active:'5' },
        { id: 6, name: '私人FM', path: '/home',active:'6' },
    ],
    person: [
        { id: 7, name: '本地与下载', path: '/home', icon: '',active:'7' },
        { id: 8, name: '最近播放', path: '/home', icon: '',active:'8' },
        { id: 9, name: '我的音乐云盘', path: '/home', icon: '',active:'9' },
        { id: 10, name: '我的播客', path: '/home', icon: '',active:'10' },
        { id: 11, name: '我的收藏', path: '/home', icon: '',active:'11' },
    ]
})

const userdata = reactive({
    id: '',
    name: '',
    createList: [
        // active的数值无关，也就是可以任何数值，后续使用歌单id即可(转为字符串)
        { id: 12, name: '我喜欢的音乐', path: '/home', icon: '',active:'12' },
    ],
    likeList: [

    ],
})
const router = useRouter();
const store = useStore();
const nowActive = ref('');
nowActive.value = store.state.listActive;
// console.log(`nowactive=${store.state.listActive}`);
const gotoView = (ipath,active) => {
    store.dispatch('listActive',active);
    router.push({path:ipath});
}

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

// 更改右边边框的颜色
:deep(.el-menu) {
    --el-menu-border-color: #2b2b2b;
    border-right: solid 1px #373737 !important;
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
