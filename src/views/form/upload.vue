<template>
  <div class="frame-page h-panel">
    <div class="h-panel-bar"><span class="h-panel-title">上传表单</span></div>
    <div class="h-panel-bar">
      <uploader @fileclick="fileclick" :type="type" :files="value" :dataType="dataType" :uploadList="uploadList"
                ref="uploader" :dragdrop="dragdrop" @deletefile="deletefile">
      </uploader>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'upload',
    data() {
      return {
        type: 'images',
        value: [],
        dataType: 'file',
        uploadList: [],
        dragdrop: false
      }
    },
    methods: {
      fileclick() {
        alert()
      },
      deletefile() {

      }
    }
  }
</script>

<style scoped>

</style>
