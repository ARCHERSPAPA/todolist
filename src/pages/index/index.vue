<template>
    <div class="index">
  <div class="aside">
      <el-row class="tac">
  <el-col :span="12">
  
    
  </el-col>
  <el-col :span="12">
   
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>关于我</span>
        </template>
        <el-menu-item-group>
          <template slot="title">个人信息</template>
          <el-menu-item index="1-1">邮箱:archerspapa@gmail</el-menu-item>
          <el-menu-item index="1-2">姓名:向建宇</el-menu-item>
            <el-menu-item index="1-3">电话:15388236496</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title"><a href="https://github.com/ARCHERSPAPA" target="_blank">我的github</a></template>
          <el-menu-item index="1-4-1" >下载项目源码</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">查看已完成</span>
      </el-menu-item>
         <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">修改</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </div>
   <div ref="adds" class="add">
      <el-button round title="新增任务" @click="add">+</el-button>
    </div>
  <div class="main"></div>
    </div>
</template>
<script>
export default {
  data(){
return{
   userinfo: [],
   index:0
}
  },
   created() {
    if (typeof localStorage.tab !== "undefined") {
      this.userinfo = localStorage.tab.split("~").filter((a)=>{return a!==''});
   
    }
  },
  mounted(){
       move(this.$refs.adds);
    function move(oDiv) {
      oDiv.onmousedown = function(ev) {
        var disX = ev.clientX - oDiv.offsetLeft;
        var disY = ev.clientY - oDiv.offsetTop;
        document.onmousemove = function(ev) {
          var l = ev.clientX - disX;
          var t = ev.clientY - disY;
     
          oDiv.style.left = l + "px";
          oDiv.style.top = t + "px";
        };
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    }
    for (var i = 0; i < this.userinfo.length; i++) {
      var a = this.userinfo[i].split(",")?this.userinfo[i].split(","):{};
              a['page']='.main'
           this.$tab(a);
    }
  },
    methods:{
      handleOpen(){
      },
      handleClose(){
      },
      add() {
      this.$tab({'page':'.main'});
    }
    }
}
</script>
<style lang="less" scoped>
a{
  color: white;
  text-decoration: none
}
.tac{
    width: 40vh;
    
}
.index{
 .add {
    position: absolute;
    top: 10%;
    right: 20%;
  }
 position: relative;
    display: flex;
   
     height: 100%;
 .aside{
     background: rgba(84, 92, 100);
    width: 20vh;
    height: 90vh;
   }
 .main{
     background: black;
      flex: 1;
    overflow: hidden;
 }
  }
</style>


