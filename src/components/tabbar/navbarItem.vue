<template>
    <div class="nav-bar-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"navbarItem"
}
</script>

<style>
#logo{
  font-size: 1.5em;
  font-weight: 500;
  line-height: 40px;
  color: #273849;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
};
.nav-bar-item{
  padding-right: 12.8px;
  margin: 0px 9.6px;
}
</style>