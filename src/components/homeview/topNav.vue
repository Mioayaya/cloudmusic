<template>
    <div class="topnav">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyiyun"></use>
            </svg>
            <span class="text">网易云音乐</span>
        </div>

    </div>
</template>

<script setup>

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
    .left {
        position: relative;
        color: white;
        justify-content: left;
        display: flex;
        .icon {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }
        .text {
            font-size: 18px;
            line-height: 30px;
            margin-top: -3px;
        }
    }
}
</style>