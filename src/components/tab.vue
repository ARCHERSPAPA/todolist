<template>
  <div class="tab" ref="tav" v-if="show">
    <div class="confirm" v-if="showconfrim" @click="confrim">
      标记已完成
      <span>√</span>
    </div>
    <div class="date-create" v-if="showD">
      <p>创建日期:{{date}}</p>
    </div>
    <div class="head">
      <el-input v-model="title" placeholder="请输入内容"></el-input>
      <div class="close" @click="close">X</div>
    </div>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="100"
      show-word-limit
        @keyup.enter.native="save"
    ></el-input>
    <div class="q" v-if="showme" v-show="showC" @click="save" :class="{'dis':dis}">√</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: "",
      show: true,
      showC: false,
      showme: true,
      showD: false,
      showconfrim:false,
      title: "",
      tabs: 0,
      date: "",
      position: {}
    };
  },
  props: {
    data: {
      type: [Object, Array],
      default: null
    },
     dis:{
       type:[Boolean],
       default:false
    }
     },
  created() {},
  mounted() {
      if (this.data .length>1) {
      this.title = this.data[0];
      this.textarea = this.data[1];
      this.date = this.data[2];
      this.position=this.data[3].split('*')
            this.dis=this.data[4]
           this.showconfrim=this.data.showconfrim
      console.log(this.dis);
      this.$refs.tav.style.top=this.position[0]
       this.$refs.tav.style.left=this.position[1]
            this.showme = false;
      this.showD = true;
          }
    document.addEventListener("click", function(i) {
      if (i.target.className === "main") {
       that.showC = false;
      }
    });
    var that = this;
    move(this.$refs.tav);
    function move(oDiv) {
      oDiv.onmouseenter = () => {
        if (that.dis === false) that.showC = true;
      };
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
  },
  methods: {
    confrim(){
   var datenow = `2019.${new Date().getMonth() + 1}.${new Date().getDate()}`;
      if (typeof localStorage.done === "object Object" ||typeof localStorage.done === "undefined") {
        localStorage.done = "";
      }
     
      localStorage.done+=`${this.data},${datenow}`+' '
   this.close()
    },
    save() {

      if(this.title.search('~')<=0 && this.textarea.search('~')<=0){
      this.showD = true;
      this.dis = true;
      setTimeout(() => {
        this.showC = false;
      }, 900);
      if (typeof localStorage.tab === "undefined") {
        localStorage.tab = "";
      }
      if (typeof localStorage.all === "undefined") {
        localStorage.all = -1;
      }
   var position= `${this.$refs.tav.style.top}*${this.$refs.tav.style.left}`;
      var date = `2019.${new Date().getMonth() + 1}.${new Date().getDate()}`;
     
   var sj = `${this.title},${this.textarea},${date},${position},${this.dis}`;
      localStorage.tab += sj + "~";
      localStorage.all = +localStorage.all + 1;
      this.tabs = localStorage.all;
      this.date = date;
     }else{
       this.$message('内容不能有~')
     }
   
    },
    close() {
      if(this.dis== false){
           
              this.$confirm("检测到未保存的内容，是否退出当前编辑？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确认",
        cancelButtonText: "取消"
         
      })
      
        .then(() => {
                   this.show = false;
          var sj = localStorage.tab.split("~");
          sj.splice(this.tabs, 1);
          sj.join("~");
          if(this.dis=='true' ||this.dis==true){
               localStorage.tab = sj;
                 localStorage.all -= 1;
                            }
             })
        .catch(action => {
          console.log(action)
      
this.$message({
            type: "info",
            message: action === "cancel" ? "继续当前的任务" : "删除成功" ,
           
          });
        
          
        });
      }else{
             this.show = false;
          var sj = localStorage.tab.split("~");
          sj.splice(this.tabs, 1);
          sj.join("~");
          if(this.dis=='true' ||this.dis==true){
               localStorage.tab = sj;
                 localStorage.all -= 1;
                            }
      }
    
  }}
};
</script>
<style lang="less" scoped>
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes diss {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotateX(180deg);
  }
}
.head {
  display: flex;
  .close {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close:hover {
    color: wheat;
  }
}

.date-create {
  border: 1px solid blue;
  border-radius: 5px;
  background: rgb(235, 237, 238);
  position: absolute;
  left: -2vh;
  top: 0;
  color: #999999;

  transform: translate(-100%);
  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-right: none;
    transform: rotateX(180deg);
    position: absolute;
    left: 13px;
  }

  &::before {
    border-left-color: blue;
    top: 25%;
    left: 100%;
  }

  &::after {
    border-left-color: rgb(235, 237, 238);
    top: 25%;
    left: calc(100% - 1px);
  }
}

.tab {
  .confirm {
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    padding: 5px;
    cursor: pointer;
  }
  .confirm:hover {
    transition: 0.2s;
    outline: 1px solid #999999;
  }
  & .dis {
    animation: diss 1s;
  }
  display: inline-block;
  width: 200px;
  position: absolute;
  border: 1px solid;
  top: 200px;
  right: 50%;
  background: rgba(255, 255, 255, 0.5);
  animation: fade 1s;
  .q {
    position: absolute;
    top: 100%;
    color: aliceblue;
    right: 0;
    transition: 1s;
  }
}
.tab:hover {
  transition: 0.2s;
  box-shadow: 0px 0px 3px 1px white;
}
</style>


