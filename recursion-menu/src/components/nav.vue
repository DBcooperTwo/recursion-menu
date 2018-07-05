<template>
  <div class="nav">
    {{msg}}
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      msg:''
    }
  },
  methods:{
    ...mapMutations(['updateNav'])
  },
  computed:{
    ...mapState(['navName'])
  },
  mounted(){
      //this.updateNav("123")//本来以为要用vuex，结果用不到，先注释掉
      this.msg=this.$route.meta;//刷新时取当前路由的meta，赋值给导航
  },
  watch:{
      $route(to,from){
        this.msg=to.meta;//监控当前路由变化，获取meta赋值给导航
      }
  }
}
</script>
<style scoped>
.nav{
    width: 100%;
    text-align: left;
    height:50px;
    line-height: 50px;
    padding-left: 20px;
    font-size:14px;
    background: antiquewhite
}
</style>
