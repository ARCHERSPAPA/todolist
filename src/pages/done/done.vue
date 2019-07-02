<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column label="发起时间" prop="date"></el-table-column>
    <el-table-column label="完成时间" prop="datenow"></el-table-column>
    <el-table-column label="任务名称" prop="name"></el-table-column>
    <el-table-column label="任务详情" prop="description"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"> <span class="iconfont icon-dianzan"></span></el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search: "",
      datas: {
        date: "",
        name: "",
        description: "",
        datenow: ""
      }
    };
  },
  created() {
     var vm = [];
        console.log( localStorage.done)
    if (localStorage.done !== undefined && localStorage.done !== "" ) {
 
      var data = localStorage.done.split(" ").filter(a => {
        return a !== "";
      });
 
    for (var i = 0; i < data.length; i++) {
      var s = data[i].split(",");
      vm[i] = s;  
      }
    }

    

for(let i =0;i<vm.length;i++){
   var datas= {
        date: "",
        name: "",
        description: "",
        datenow: ""
      }
  
    datas["date"] = vm[i][2];
     datas["name"] = vm[i][0];
     datas["description"] = vm[i][1];
     datas["datenow"] = vm[i][5];
      console.log(datas)
        this.tableData.push(datas)
}
     
      
 
  },
  methods: {
    handleEdit(index, row) {

      console.log(index, row);
    },
    handleDelete(index, row) {
var data=localStorage.done.split(" ").filter(a => {
        return a !== "";
      });
console.log(data)
    data.splice(index,1)
    localStorage.done=data
    this.tableData.splice(index,1)
    }
  
  }

};
</script>
<style lang="less" scoped>

</style>


