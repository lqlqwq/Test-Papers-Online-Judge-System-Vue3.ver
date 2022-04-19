<template>
    <BackGround></BackGround>
</template>

<script setup>
import request from './utils/request'
import Login from './components/LoginRegister/Login'
import BackGround from './components/BackGround'
// const test = () => {
//     request("test","GET")
// }
const components={
    components:{
        Login,
        BackGround
    }
}

</script>

<style>
    *{
        margin: 0;
        padding: 0
    }
</style>
