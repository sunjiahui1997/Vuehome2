<template>
    <div class="nav-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:"navbar"
}
</script>

<style>
.nav-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search{
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #273849;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
    background: #fff url(https://www.iconfinder.com/data/icons/ios7-essence/22/common_search_lookup__-512.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
}
.search:focus{
    border: 1px solid #64b687;
}
#logo{
  font-size: 1.5em;
  font-weight: 500;
  line-height: 40px;
  color: #273849;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}; 
</style>