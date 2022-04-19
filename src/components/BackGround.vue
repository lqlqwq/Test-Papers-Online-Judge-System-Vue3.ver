<template>
    <div class="bg" :style="`background-image: url(${BG})`"></div>
</template>

<script setup>
import BG from '../assets/img/bg/Anmi1.jpg';
</script>

<style scoped>
    .bg{
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
        background-position: center;
        background-attachment: fixed
    }
</style>