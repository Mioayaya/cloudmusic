<template>
    <div>
        <router-view/>
        <play-bottom></play-bottom>
    </div>
</template>

<script setup>
import PlayBottom from './components/palyController/playBottom.vue';


</script>


<style lang="less">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 62.5%;
}

body {
    background-color: #eee;
    width: 100%;
    height: 100%;
    position: absolute;
}

a {
    color:#fff;
    text-decoration: none;
}

a:hover {
    color: #fff;
}
</style>
