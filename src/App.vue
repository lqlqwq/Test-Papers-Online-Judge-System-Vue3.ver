<template>
    <div id="snow"></div>
    <BackGround :bgName="backGround"></BackGround>
    <Navi :type="type"></Navi>
    <router-view />
</template>

<script setup>
import { onMounted , getCurrentInstance , ref } from 'vue'
import request from './utils/request'
import BackGround from './components/BackGround'
import Navi from './components/Navi'
import names from '@/assets/names'
import SNOW from '@/utils/tools/snow';
// const test = () => {
//     request("test","GET")
// }
const components = {
    components: {
        BackGround,
        Navi,
    }
}
const type = "main"
const backGround = names.ANMI2

onMounted( () => {
    setTimeout(function() {
            SNOW().init(document.getElementById('snow'));
        }, 500);
} )

</script>

<style lang="scss">
@use "./style/base.scss"
</style>

<style>
/* autoprefixer: off */
    .snowflake {
        position: absolute;
        display: block;
        position: absolute;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-image: -webkit-radial-gradient(center,
                circle farthest-corner,
                rgba(255, 255, 255, 1) 40%,
                rgba(255, 255, 255, 0) 100%);
        background-image: -moz-radial-gradient(center,
                circle farthest-corner,
                rgba(255, 255, 255, 1) 40%,
                rgba(255, 255, 255, 0) 100%);
        background-image: -ms-radial-gradient(center,
                circle farthest-corner,
                rgba(255, 255, 255, 1) 40%,
                rgba(255, 255, 255, 0) 100%);
        background-image: radial-gradient(center,
                circle farthest-corner,
                rgba(255, 255, 255, 1) 40%,
                rgba(255, 255, 255, 0) 100%);
    };

    #snow {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: auto;
    }
</style>