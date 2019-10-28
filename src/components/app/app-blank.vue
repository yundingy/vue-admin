<template>
  <div>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app-blank'
  }
</script>

<style scoped>

</style>
