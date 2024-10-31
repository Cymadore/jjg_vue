<template>
  <div id="nav">
    <div class="nav-bar" :class="{'nav-bar-hidden':menuhidden}">
      <div class="bar-content">
        <a href="/">home</a>
        <a href="/#skills">skills</a>
        <a href="/#project">project</a>
        <a href="/#career">career</a>
      </div>
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
  @use "@/styles/global";
  #nav{
    position:fixed;
    width:100%;
    z-index: 6;
    height:60px;
    top:0;
    .nav-bar{
      background-color: rgba(#2a2a2a,1);
      z-index: 7;
      height:60px;;
      display: ininline-block; 
      .bar-content {
        width:100%;
        max-width:1280px;
        margin: 0px auto;
        position: relative;
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
    }
    .nav-bar-hidden{
      background-color: rgba(#2a2a2a,0.2);
    }
  }
  
</style>