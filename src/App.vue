<template>
  <div id="nav">
    <div class="nav-bar" :class="{'nav-bar-hidden':menuhidden}">
      <!-- <router-link to ="/">home</router-link>
      <router-link to ="/skills">skills</router-link>
      <router-link to ="/courier">courier</router-link>
      <router-link to ="/project">project</router-link> -->
      <a href="#index">home</a>
      <a href="#skills">skills</a>
      <a href="#courier">courier</a>
      <a href="#project">project</a>
    </div>
  </div>
  <router-view />
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue';

  export default {
    setup(){
      const menuhidden = ref(false);
      function onScroll() {
        const currentScroll = document.documentElement.scrollTop;
        if(currentScroll <= 80) {
          menuhidden.value = false;
        } else {
          menuhidden.value = true;
        }
      }
      onMounted(()=> {
        console.log('onmounted');
        window.addEventListener("scroll", onScroll);
      })
      onBeforeUnmount(()=> {
        console.log('onBeforeUnmount')
        window.removeEventListener("scroll", onScroll);
      })
      return {menuhidden}
    }
  }
</script>

<style lang="scss">
  @import "@/styles/global";
  #nav{
    position:fixed;
    width:100%;
    z-index: 6;
    height:60px;
    top:0;
    .nav-bar{
      background-color: rgba(cadetblue,1);
      z-index: 7;
      height:60px;;
      margin: 0px auto;
      width: 1280px;
      position: relative;
      display: ininline-block;
      a {
        display: inline-block;
        vertical-align: middle;
        color: #ffffff;
        margin: 10px 0px 0px 39px;
        font-family: SpoqaHanSans;
        font-weight: bold;
        font-size: 18px;
      }
    }
    .nav-bar-hidden{
      background-color: rgba(cadetblue,0.2);
    }
  }
</style>