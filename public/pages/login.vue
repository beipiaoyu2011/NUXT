<template>
    <div class="mylogin">
        login page
        <div class="container">
            <form @submit.prevent="login">
                <p class="error" v-if="formError">{{formError}}</p>
                <p>
                    <i>
                        To login, use
                        <b>demo</b> as username and
                        <b>demo</b> as password.
                    </i>
                </p>
                <p>username： <input v-model="formUsername" type="text" name="username"></p>
                <p>password： <input v-model="formPassword" type="password" name="password"></p>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formError: null,
            formUsername: '',
            formPassword: ''
        }
    },
    methods: {
        async login() {
            try {
                await this.$store.dispatch('login', {
                    username: this.formUsername,
                    password: this.formPassword
                });
            } catch (e) {
                this.formError = e.message;
            }
        }

    },
    head: {
        title: 'LOGIN'
    }
}
</script>
<style>
.mylogin {
  text-align: center;
}
.error {
  color: red;
}
p {
  margin: 10px 0;
}
</style>


