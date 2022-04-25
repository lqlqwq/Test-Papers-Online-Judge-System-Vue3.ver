<template>
    <img :src="BG.Anmi2" ref="image_bg" style="display: none">
    <Transition>
        <div id="snow" ref="snow"></div>
    </Transition>
    <BackGround :bgName="backGround" :index="index"></BackGround>
    <Navi :type="type"></Navi>
    <router-view />
</template>

<script setup>
import { onMounted, getCurrentInstance, ref } from 'vue'
import BG from '@/assets/img/output-bg'
import request from '@/utils/request'
import BackGround from '@/components/BackGround'
import Navi from '@/components/Navi'
import names from '@/assets/names'
import SNOW from '@/utils/tools/snow'
// const test = () => {
//     request("test","GET")
// }
const components = {
    components: {
        BackGround,
        Navi,
    }
}
const type = ref("main")
const index = ref("wait")
const backGround = names.ANMI2
const snow = ref(null)
const image_bg = ref(null)
let show = ""
const showSnow = () => {
    if (image_bg.value.complete) {
        setTimeout(function () {
            SNOW().init(snow.value)
        }, 5000)
        index.value = 'index'
        clearInterval(show)
    }
}

onMounted(() => {
    show = setInterval(showSnow, 500)
})

</script>

<style lang="scss">
@use "./style/base.scss";
.v-enter-from{
    top: -500px;
}
.v-enter-active{
    transition: all 5s ease;
}
.v-enter-to{
    top: 0px;
}
#snow {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: auto;
    top: 0;
    // display: none;
}

/* autoprefixer: off */
.snowflake {
    position: absolute;
    display: block;
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
}
</style>