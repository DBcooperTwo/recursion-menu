<template>
    <div class="menu" ref="menu">
        <router-link tag="p"  v-for="item in folderDate"  :key="item.name" :to='item.path'>
            <span @click="childshow(item.children,item.class,$event)" :class="item.class" :style="{'padding-left':item.level*20+'px'}">{{item.name}}
                <i class="fa fa-chevron-right" aria-hidden="true" v-if="item.children"></i>
            </span> 
            <menua :children='item.children' v-if="item.children" v-show="isshow" ></menua>
        </router-link>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      isshow:false
    }
  },
  props:['folderDate'],//拿到递归的数据，这里需要统一好props传值的name--folderDate
  mounted(){
    var len=this.$route.meta.match(/\//g)?this.$route.meta.match(/\//g).length:0;//通过路由的meta判断当前层级，这里层级实际已经减1了
    var arr=document.querySelectorAll('.router-link-active .menu');//选择所有的左边菜单代码块
    if(arr.length)
      for(var i=0;i<len;i++){
        arr[i].previousSibling.previousElementSibling.querySelector("i").style.transform="rotate(90deg)";//当前选中目录的父目录的图标需要旋转一下，显示打开状态
        arr[i].style.display='block';//在刷新时，打开相应的层级（默认都是隐藏的）
      }
    var selectName=document.querySelector(".menu ."+localStorage.getItem("curPathname"));//刷新之后通过本地获取当前路由对应的class
    selectName && (selectName.className+=" active");//给当前路由对应的目录加上active类
  },
  methods:{
    childshow(child,cas,ev){
      if(ev.target.tagName=='SPAN'){//这里需要判断是不是iconfont
        ev.target.className="";//清空当前dom的class
        var active=document.querySelectorAll(".menu .active");
        for(var i=0;i<active.length;i++){
          active[i].className="";//循环将所有的active清除
        }
        ev.target.className=cas+" active";//给当前的点击目录加上active
        if(child){//判断是不是有子节点
          var menu=document.querySelector("."+cas+"+div");//选中当前目录的下一个节点
          var menui=document.querySelector("."+cas+" i");//选中当前选中目录的iconfont
          menu.style.display=='none'?(menu.style.display='block',menui.style.transform="rotate(90deg)"):(menu.style.display='none',menui.style.transform="rotate(0deg)");//点击时打开内部的children和旋转iconfont
        }
      }
      
    }
  }
}
</script>
<style scoped lang="scss">
p {
  span{
      background-color: antiquewhite;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      width: 160px;
      position: relative;
      text-align: left;
      &:hover{
        background-color:#d8be9b;
        color:#fff;
        cursor: pointer;
      }
      i{
        position: absolute;
        right: 20px;
        top:12px;
      }
    }
}
.active{
    background:#d8be9b;
    color: #fff
}
</style>
