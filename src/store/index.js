import { createStore } from 'vuex'

export default createStore({
    state: {
        // 数据存放
        listActive: 1,
        // 播放列表
        playlist: [],
        // 当前播放的音乐
        playCurrentIndex: 0,
        // 当前播放是第几首
        playId: 0,
    },
    getters: {
    },
    mutations: {
        listActive2(state, active) {
            state.listActive = active;
        },
        // 修改播放列表
        setPlaylist2(state,value) {
            state.playlist = value;
        },
        setPlayIndex2(state,index) {
            state.playCurrentIndex = index;
        },
        setPlayId2(state,id) {
            state.playId = id;
        }
    },
    actions: {
        listActive(context, active) {
            context.commit('listActive2', active);
        },
        setPlaylist(context, value) {
            context.commit('setPlaylist2', value);
        },
        setPlayIndex(context, index) {
            context.commit('setPlayIndex2', index);
        },
        setPlayId(context, id) {
            context.commit('setPlayId2', id);
        }
    },
    modules: {
    }
})
