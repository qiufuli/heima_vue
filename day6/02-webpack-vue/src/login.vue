<template>
    <div>
        <h1>这是登录组件 使用.vue创建的{{msg}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:2222
        }
    },
    methods:{
        show(){
            console.log('login中的show方法')
        }
    }
    
}
</script>
<style>

</style>


