<template>
  <div class="head">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">所有安排</el-menu-item>
      <el-menu-item index="2">待处理</el-menu-item>
      <el-menu-item index="3">已完成</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
        activeIndex2: "1"
    };
  },
  created(){
    if(typeof localStorage.indexpage!=='undefined'){
this.activeIndex2=localStorage.indexpage
    }
      },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 2) {
         localStorage.indexpage=2
        this.$router.push({ path: "/wait" });
      }
       if (key == 3) {
            localStorage.indexpage=3
        this.$router.push({ path: "/done" });
      }
       if (key == 1) {
         localStorage.indexpage=1
          this.$router.push({ path: "/" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
