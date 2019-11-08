<template>
  <div>
    <vue-clip></vue-clip>
  </div>
</template>
<script>
  import VueClip from 'vue-clip'
  export default {
    name: 'app',
    components: {
      VueClip
    },
    data() {
      return {
        uploadList: [],
        files: []
      }
    },
    methods: {
      handleFilePondInit: function () {
        console.log('FilePond has initialized')
        // FilePond instance methods are available on `this.$refs.pond`
      }
    }
  }
</script>
