<template>
    <div class="title">
        <ul>
            <li><a href="javascript:void(0)" class="logo">大肥羊智能评卷系统</a></li>
            <li><a href="javascript:void(0)" rel="external nofollow">产品简介</a></li>
            <li><a href="javascript:void(0)" rel="external nofollow">支持</a></li>
            <span><a href="javascript:void(0)" rel="external nofollow" class="user" id="user-main">用户中心</a></span>
            <span class="user" style="color: #97ff95" id="welcome">欢迎</span>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.title {
    height: 70px;
    width: 100%;
    position: relative;
    z-index: 1;
    background-color: rgba(15, 118, 255, 0.5);

    a:hover {
        color: red !important;
    }

    >ul {
        list-style: none;
        display: block;
        width: 1200px;
        margin: 0 auto;

        #welcome,
        #user-main {
            display: block;
            float: right;
            height: 70px;
            margin-right: 50px;
            line-height: 70px;
            text-decoration: none;
            font-weight: bold;
            font-family: "微软雅黑 Light";
            color: rgb(255, 203, 0);
            font-weight: 600;
            font-size: 19px
        }

        .logo {
            display: block;
            float: left;
            height: 70px;
            padding-right: 20px;
            line-height: 70px;
            text-decoration: none;
            color: black;
            font-family: "微软雅黑 Light";
            font-weight: bolder;
            font-size: 20px;
        }

        a:not(.logo) {
            display: block;
            float: left;
            height: 70px;
            margin-left: 20px;
            padding-left: 20px;
            padding-right: 20px;
            line-height: 70px;
            text-decoration: none;
            color: black;
            font-weight: bold;
            font-family: "微软雅黑 Light";
            font-weight: 600
        }
    }
}
</style>