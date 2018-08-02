<template>
    <div class="mylogin">
        <div class="container">
            <form @submit.prevent="login" v-if="!$store.state.authUser">
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
            <div v-else>
                Hello, {{$store.state.authUser && $store.state.authUser.username}} ,
                <pre>I am the secret content, I am shown only when the use is connected.</pre>
                <p>
                    <i>You can also refresh this page, you'll still be connected!</i>
                </p>
                <button @click="logout">LOGOUT</button>
            </div>
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
                console.log('e', e);
                this.formError = e.message;
            }
        },
        async logout() {
            try {
                await this.$store.dispatch('logout');
            } catch (e) {
                console.log('e', e);
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


