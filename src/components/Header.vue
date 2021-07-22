<template>
  <div class="header">
    <img class="logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const router = useRouter()

// eslint-disable-next-line no-unused-vars
const goGitHub = () => {
  window.open('https://github.com/vectorzero/vite-vue3-starter')
}
</script>

<style scoped lang="scss">
.header {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  padding-left: 20px;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
}
.logo {
  width: 70px;
  height: 70px;
}
</style>
