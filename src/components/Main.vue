<template>
  <main class="main-container">
    <div class="top">
      <Header />
    </div>

    <div class="bottom">
      <div class="left">
        <Nav />
      </div>

      <div class="right">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Header,
    Nav
  }
})
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.top {
  height: 80px;
  line-height: 80px;
}
.bottom {
  flex: 1;
  display: flex;
  padding: 10px;
}
.left {
  margin-right: 20px;
}
.right {
  flex: 1;
}
</style>
