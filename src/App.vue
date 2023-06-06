<script setup lang="ts">
import GlobalHeader from './components/GlobalHeader.vue'
</script>

<template>
  <GlobalHeader />
  <main class="global-layout">
    <RouterView />
  </main>
</template>

<style lang="scss">
.global-layout {
  padding: 24px;
}
</style>
