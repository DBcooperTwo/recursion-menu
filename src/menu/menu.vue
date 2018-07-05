<template>
  <div class="menu">
    <router-link  tag="p" v-for="child in children" :key="child.name" :to='child.path'>
        <span @click="childshow(child.children,child.class,$event)" :class="child.class" :style="{'padding-left':child.level*20+'px'}">{{ child.name }}
          <i class="fa fa-chevron-right" aria-hidden="true" v-if="child.children"></i>
        </span>
        <menus v-if="child.children" :folderDate="child.children" v-show="isshow" ></menus>
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
  props:['children'],//拿到递归的数据，这里需要统一好props传值的name--children
  methods:{
    childshow(child,cas,ev){
      if(ev.target.tagName=='SPAN'){//这里需要防止点击iconfont，一下通menus
        ev.target.className="";
        var active=document.querySelectorAll(".menu .active");
        for(var i=0;i<active.length;i++){
          active[i].className=""
        }
        ev.target.className=cas+" active";
        if(child){
          var menu=document.querySelector("."+cas+"+div");
          var menui=document.querySelector("."+cas+" i");
          menu.style.display=='none'?(menu.style.display='block',menui.style.transform="rotate(90deg)"):(menu.style.display='none',menui.style.transform="rotate(0deg)");
        }
      }  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
p {
  span{
    background-color: antiquewhite;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    width: 100%;
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
