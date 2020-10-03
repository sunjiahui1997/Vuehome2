<template>
    <div class="nav-bar-item" @mouseover="showDropdown(item)" @mouseout="hiddenDropdown(item)" >
        <div v-show="isShow"><dropdown :item2 = 'activemeauObject' @mousemove1 ='aaa' @mouseout1 = 'bbb' ></dropdown></div>
        <slot></slot>     
    </div>
</template>

<script>
import dropdown from './dropDown'

export default {
    name:"navbarItem",
    data(){
        return{
            isShow : false,
            activemeauObject:{}
        }
    },
    props:{
        item:String
    },
    methods:{
        showDropdown(item){
            console.log(item);
            this.activemeauObject = this.$store.state.title[item],
            console.log(this.activemeauObject);
            this.isShow = true
        },
        hiddenDropdown(){
            // console.log('');
            this.isShow = false
        },
        dmouseMove(){
            this.isShow = true
            // console.log($event);
        },
        aaa(){
            this.isShow = true
        },
        bbb(){
            this.isShow = false
        }
    },
    components:{
        dropdown
    }
}
</script>

<style scoped>
.nav-bar-item{
  display: flex;
  cursor: pointer;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  padding-right: 12.8px;  
  margin: 0px 9.6px; 
};
</style>
