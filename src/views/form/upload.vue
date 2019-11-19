<template>
  <div>
    <Uploader type="files" dataType="url" :files="images" @click="alert()"></Uploader>
  </div>
</template>

<script>
  export default {
    name: 'uploader',
    data() {
      return {
        images: []
      }
    },
    methods: {
      fileClick(e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
