<template>
  <div>
    <button class="h-btn" @click="opened=true">Vue调用Modal</button>
    <button class="h-btn" @click="openModal">js调用Modal</button>
    <Modal v-model="opened" draggable="true">
      <div slot="header">Vue</div>
      <div>这是使用vue调用的弹出框</div>
      <div slot="footer">
        <button class="h-btn" @click="opened=false">取消</button>
      </div>
    </Modal>
    <div class="aaa">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'test1',
    data() {
      return {
        opened: false
      }
    },
    methods: {
      openModal() {
        this.$Modal({
          title: 'Js',
          content: '这是使用Js调用的弹出框',
          draggable: true
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .aaa{
    width: 100px;
    height: 100px;
  }
</style>
