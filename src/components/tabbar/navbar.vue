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
}
</style>