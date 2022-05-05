<template>
    <div class="bg" :style="`background-image: url(${BG[bgName]})`"></div>
    <transition>
        <div v-if="index" v-show="index!=='wait'" class="bg-after-index"></div>
    </transition>
    <div v-if="!index" class="bg-after"></div>
</template>

<script setup>
import BG from '@/assets/img/output-bg'
import { reactive } from "vue"
const props = defineProps({
    bgName: {
        type: String,
        required: true
    },
    index: {
        type: String,
        required: true
    }
})

const data = reactive({
  noActivated: false
});
// v-if="index" v-show="index!=='wait'"
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
    opacity: 0.8;
    background-size: cover;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1
}
.bg-after-index {
    opacity: 0.4;
    background-size: cover;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
}

.v-enter-from{
    opacity: 0;
}
.v-enter-active{
    transition: opacity 3s ease;
}
</style>