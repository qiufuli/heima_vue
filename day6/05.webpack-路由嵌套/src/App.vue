<template>
  <div>
    <h1>这是app组件</h1>
    <!-- 为什么这里叫做 mt-button 直接能用？ -->
    <mt-button type="primary"  size="normal"  plain @click="show">default</mt-button>
    <button type="button" class="mui-btn mui-btn-royal"  plain @click="show">MUIdefault</button>
    <router-link to="/account">go account</router-link>
    <router-link to="/goodslist">go goodslist</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      returnToast:null
    }
  },
  created(){
    this.getlist()
  },
  methods:{
    getlist(){
      this.show();
      // setTimeout(()=>{
      //   this.returnToast.close();
      // },2000)
    },
    show(){
      // Toast('提示信息')
      this.returnToast = Toast({
        message:'提示信息',
        duration:-1,
        className:'btns'
      })
    }
  }
};
</script>
<style>
</style>
