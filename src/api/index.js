import axios from 'axios'

const baseURL = 'http://localhost:3000';

// 获取轮播图的api  type:资源类型,对应以下类型,默认为 2 即 iphone
// 0: pc 1: android 2: iphone 3: ipad
export function getBanner(type=0) {
    return axios.get(`${baseURL}/banner?type=${type}`);
}

// 获取推荐歌单api /personalized?limit=1
export function getRecommendList(num) {
    return axios.get(`${baseURL}/personalized?limit=${num}`);
}

// 获取歌单详情 
export function getPlaylistDetail(id) {
    return axios.get(`${baseURL}/playlist/detail?id=${id}`);
}