<template>
  <div>
    <h1>这是app组件</h1>
    <router-link to="/account">go account</router-link>
    <router-link to="/goodslist">go goodslist</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>
