<template>
  <div class="home">
    <menus :folderDate="folderDates" ref="tree"></menus>
    <div id="content">
        <navs></navs>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>
  </div>
</template>

<script>
import navs from './nav'
export default {
  name: 'home',
  data () {
    return {
      folderDates: []
    }
  },
  components:{navs},
  mounted(){
    this.$get("/static/mock.json").then((res)=>{
        //利用axios获取本地的json数据
        //将数据通过props传递给menus，menus解析第一层数据，然后将children传给menua，menua也是解析一层，然后传递给menus,递归性质的将json的树形树状结构给渲染完毕
        //这里的两个组件menus和menua必须是全局组件，不然会报错。
        this.folderDates=res.data;
    })
  }
}
</script>
<style scoped lang='scss'>
.home {
    display: flex;
    height: 100%;
}
.home .menu{
    background: antiquewhite;
    padding-top: 40px;
}
#content{
    width:100%;
    display: flex;
    flex-direction: column;
    font-size:20px;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
