<template>
    <div class="mylogin">
        login
        <button :click="loginFunc">登录</button>
    </div>
</template>
<script>
export default {
    methods: {
        loginFunc() {
            console.log(11);            
        },

    }
}
</script>
<style>
.mylogin {
  text-align: center;
}
</style>


