<template>
    <div>
      <button class="h-btn" @click="opened=true">Vue调用Modal</button>
      <Modal v-model="opened" draggable="true">
        <div slot="header">Vue</div>
        <div >这是使用vue调用的弹出框</div>
        <div slot="footer"><button class="h-btn" @click="opened=false">取消</button></div>
      </Modal>
    </div>
</template>

<script>
  export default {
    name: 'test1',
    data() {
      return {
        opened: false
      }
    }
  }
</script>

<style scoped>

</style>
