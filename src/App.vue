<template>
  <div id="app" >
   <span id="logo">Vue.js</span>
    <navbar>
      <navbar-item>
        <input type="text">
      </navbar-item>
      <navbar-item>
        <div>学习</div>
      </navbar-item>
       <navbar-item>
        <div>生态系统</div>
      </navbar-item>
       <navbar-item>
        <div>团队</div>
      </navbar-item>
       <navbar-item>
        <div>资源列表</div>
      </navbar-item>
       <navbar-item>
        <div>支持vue</div>
      </navbar-item>
      <navbar-item>
        <div>多语言</div>
      </navbar-item>
       <navbar-item>
        <div>参与翻译</div>
      </navbar-item>
   </navbar>
  </div>
</template>

<script>

import navbar from './components/tabbar/navbar' ;
import navbarItem from './components/tabbar/navbarItem'

export default {
  name: 'App',
  components:{
    navbar,
    navbarItem
  }
}
</script>

<style>

body{
  margin: 0;
  padding: 0;
};

</style>
