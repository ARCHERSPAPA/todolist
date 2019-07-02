<template>
  <div id="app">
    <Head></Head>
    <main>
      <router-view />
    </main>
   
  </div>
</template>
<script>
import Head from "@/components/head.vue";
export default {
  name: "App",
  data() {
    return {
     
    };
  },
  components: {
    Head
  },
  methods: {
    add() {
      this.$tab();
    }
  },
 
  mounted() {
   
 
  }
};
</script>

<style lang='less'>
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  main{
    height: 100%;
  }
}
</style>
