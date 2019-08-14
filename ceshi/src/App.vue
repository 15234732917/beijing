<template>
  <div class="box">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 15px;
  font-family: Microsoft Yahei;
}
html,body,.box {
  width: 100%;
  height: 100%;
}
</style>
