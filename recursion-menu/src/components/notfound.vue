<template>
  <div class="home">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'notfound',
  data () {
    return {
      msg:''
    }
  },
  mounted(){
    this.msg =this.$route.query.errorMsg?this.$route.query.errorMsg:'error:没有这个组件，路径错了';//这里404包括前端组件找不到和请求错误，两种情况
  }
}
</script>
<style scoped>
    .home{
        color:red
    }
</style>
