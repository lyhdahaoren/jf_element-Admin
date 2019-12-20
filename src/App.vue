<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import { axiosGet } from './libs/axios';
  export default {
    name:'app',
    data(){
      return{

      }
    },
    created(){
      console.log(axiosGet)
    }
  }
</script>

<style lang="less">
    @import "./assets/less/reset.css";
</style>
