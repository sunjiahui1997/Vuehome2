<template>
  <div id="app" >
   <span id="logo">Vue.js</span>
    <navbar>  
      <navbar-item >
         <input class="search" type="text">
      </navbar-item>
      <navbar-item item ='学习'>
        <div>学习</div>
      </navbar-item>
       <navbar-item item = '生态系统'>
        <div>生态系统</div>
      </navbar-item>
       <navbar-item item ='团队'>
        <div>团队</div>
      </navbar-item>
       <navbar-item item = '资源列表'>
        <div>资源列表</div>
      </navbar-item>
       <navbar-item item = '支持Vue'>
        <div>支持vue</div>
      </navbar-item>
      <navbar-item item = '多语言'>
        <div>多语言</div>
      </navbar-item>
       <navbar-item item = '参与翻译'>
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
  },
  data(){
    return{

    }
  },
}
</script>

<style scoped>
body{
  margin: 0px;
  padding: 0px;
}
#app{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
};
.nav-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
};

</style>