<template>
  <div class="home-container page-container">
    <el-input v-model="value1" placeholder="请输入内容"></el-input>
    <el-input v-model="value2"></el-input>
    <el-input v-model="value3"></el-input>
    <el-button @click="handleClick" type="primary">开始</el-button>
    <div class="page-title">Vite2.x + Vue3.x + TypeScript + Element Plus</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const handleClick = () => {
      console.log('hello')
    }

    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref(''),
      handleClick
    }
  }
})
</script>

<style scoped lang="scss"></style>
