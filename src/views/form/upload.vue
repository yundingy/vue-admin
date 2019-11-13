<template>
  <div>
    <v-uploader @done="uploadDone"></v-uploader>
    aa
  </div>
</template>

<script>
  export default {
    name: 'uploader',
    methods: {
      uploadDone(files) {
        if (files && Array.isArray(files) && files.length) {
          console.log(files)
        }
      }
    }
  }
</script>

<style scoped>

</style>
