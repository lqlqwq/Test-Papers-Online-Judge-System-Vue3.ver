<template>
    <BackGround :bgName="backGround"></BackGround>
    <Navi :type="type"></Navi>
    <router-view />
</template>

<script setup>
import request from './utils/request'
import BackGround from './components/BackGround'
import Navi from './components/Navi'
import names from '@/assets/names'
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

</script>

<style lang="scss">
@use "./style/base.scss"
</style>
