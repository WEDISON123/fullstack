<template>
    <div class="box">
        <div class="icon">
            <img :src="icon" alt="">
        </div>
        <div class="title">
            {{ title }}
        </div>
        <div class="icon-to">
            <img src="../assets/right.svg" alt="">
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { PropType } from 'vue';

  const props = defineProps({
    title: {
        type: String as PropType<string>,
        required: true,
    },
    icon: {
        type: String as PropType<string>,
        required: true,
    }
  });
  </script>
  
  <style lang="stylus" scoped>
  /* 样式 */
  .box
    height: 8vh;
    width: 100%;
    background-color: #fff;
    display: flex;
    // border-radius: 1vh;
    .icon
        height 5vh
        width 5vh
        margin: 1.5vh 0 0 1.5vh;
        img
            max-height: 100%;
            max-width: 100%;
    .title
        color #838383;
        font-size: 1.2rem;
        height 4vh;
        margin: 2vh 0 0 2vh
    .icon-to
        height 3vh
        width 3vh
        position: absolute;
        right: 4vw;
        margin-top: 2.5vh
        img
            max-height: 100%;
            max-width: 100%;
</style>
  