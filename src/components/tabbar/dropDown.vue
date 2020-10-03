<template>
  <div class="drop-down" @mouseover="aaa" @mouseout='bbb'>
      <div v-for="(item,index1) in Object.keys(item2)" :key="item" >
        <div class="item-drop">{{item}}</div>
         <div v-for="(item1,index) in item2[item]" :key="index">
          <div class="itemname">{{item1.name}}</div>
          </div>
          <hr v-if="index1 !== Object.keys(item2).length -1">
          </div>
  </div>
</template>

<script>
export default {
    name:"dropDown",
    props:['item2'],
    data(){
        return{
           
        }
    },
    methods:{
        aaa(){
            // console.log(this.item2);
            this.$emit('mousemove1')
        },
        bbb(){
            this.$emit('mouseout1')
        }
    }
}
</script>

<style scoped>
.itemname:hover{
    color: green
}
    .item-drop{
    color:black;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.8em;
}
    .drop-down{
        width: 100px;
        height: 200px;
        color: black;     
        position: absolute;
        top: 45px;
    };
</style>