<template>
  <div id="app">
    <uploader></uploader>
  </div>
</template>
<script>
  import uploader from 'components/common/uploader'
  export default {
    name: 'app',
    components: {
      uploader
    },
    data() {
      return { myFiles: [] }
    },
    methods: {
      handleFilePondInit: function () {
        console.log('FilePond has initialized')
        // FilePond instance methods are available on `this.$refs.pond`
      }
    }
  }
</script>
