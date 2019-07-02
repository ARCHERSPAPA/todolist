<template>
    <div class="wait">
        <p>just do it!</p>
       
        <div class="content" ref="content"> </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
             userinfo: []
        }
    },
    created(){
  if (typeof localStorage.tab !== "undefined") {
      this.userinfo = localStorage.tab.split("~").filter((a)=>{return a!==''});
    }
    },
    mounted(){
  for (var i = 0; i < this.userinfo.length ; i++) {
     var a = this.userinfo[i].split(",")?this.userinfo[i].split(","):{};
      a['page']='.content'
      console.log(a)
      this.$tab(a);
    }
         }
}
</script>
<style lang="less" scoped>
.wait{
    .done{
        display: inline-block;
        width: 300px;
        height: 200px;
       position: absolute;
       left: 0;
        border: 1px solid;
       border-radius: 40%
    }
    height: 100%;
    .content{
    display: inline-block;
    border-bottom : 1px solid;
     border-top : 1px solid;
    height: 70vh;
    width: 60%;
    margin: 0 auto;
    box-shadow: 40px 50px 80px 10px black
}
}

</style>

