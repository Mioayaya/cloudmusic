import { createStore } from 'vuex'

export default createStore({
    state: {
        // 数据存放
        listActive: 1,
    },
    getters: {
    },
    mutations: {
        listActive2(state, active) {
            state.listActive = active;
        },
    },
    actions: {
        listActive(context, active) {
            context.commit('listActive2', active);
        },
    },
    modules: {
    }
})
