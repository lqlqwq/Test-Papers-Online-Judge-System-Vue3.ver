<template>
    <div class="bg" :style="`background-image: url(${bg[bgName]})`"></div>
    <div class="bg-after"></div>
</template>

<script setup>
import bg from '@/assets/img/output-bg'
const props = defineProps({
    bgName: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.bg {
    height: 100%;
    width: 100%;
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    background-position: center;
    background-attachment: fixed;
    z-index: -2
}

.bg-after {
    opacity: 0.2;
    background-size: cover;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1
}
</style>