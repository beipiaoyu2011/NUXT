<template>
  <section class="container">
    <div>
      <div class="container">
        <div class="left">
          <h2>
            <nuxt-link to="/">Players</nuxt-link>
          </h2>
          <ul class="players">
            <li v-for="user in users" :key="user.id">
              <nuxt-link :to="'/'+ user.id">{{user.name}}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="right">
          <nuxt-child :key="$route.params.id"></nuxt-child>
        </div>
      </div>
      <nuxt-link to="/about">Go to about</nuxt-link>
      <br>
      <nuxt-link to="/secret">Go to secret</nuxt-link>
      <br>
      <button @click="alertLog">notifications me</button>
      <br> 
      <button @click="showLoginError">{{$store.state.count}} notifications me</button>
      <div>{{content_two}}</div>
      <ul>
        <li v-for="(key, value) in content" :key="value">{{value}} : {{key}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Loading from '~/components/loading.vue'
import img from '@@/public/assets/tou.jpg'
// import axios from '@/plugins/axios';
import axios from 'axios';
import j1 from '@@/JSON_1.json';
export default {
  data() {
    console.log(this);
    return {
      title: img,
      content: null,
      content_two: null,
      users: null
    }
  },
  created() {
    
  },
  notifications: {
    showLoginInfo: {
      title: 'Welcome!',
      message: 'Hello from nuxt.js',
      type: 'warn',
      timeout: 1000000000,
    },
    showLoginError: {
      title: 'Welcome!',
      message: 'Hello from nuxt.js',
      type: 'error',
      timeout: 1000000000
    }
  },
  components: {
    AppLogo,
    Loading
  },
  asyncData({ params, app, store, env }, callback) {
    console.log('======app=======');
    // console.log(store);
    axios.defaults.baseURL = "https://postman-echo.com";
    if (store.state.index_data) {
      console.log('data');
      callback(null, { content: store.state.index_data[0], content_two: store.state.index_data[1] });
    } else {
      console.log('no data');
      let p1 = () => {
        return new Promise(resolve => {
          axios.get('/get', {
            params: {
              foo1: 'bar1',
              foo2: 'bar2'
            }
          }).then(res => {
            resolve(res.data);
          })
        }).catch(err => {
          console.log(err);
        })
      };
      let p2 = () => {
        return new Promise((resolve, reject) => {
          axios.get('/get', {
            params: {
              foo1: 'bar3',
              foo2: 'bar4'
            }
          }).then(res => {
            resolve(res.data);
          })
        });
      };
      Promise.all([p1(), p2()]).then(res => {
        // console.log(res);
        store.commit('addData', res);
        callback(null, { content: res[0], content_two: res[1], users: env.users });
      });
    }

  },

  methods: {
    alertLog() {
      this.showLoginInfo();
      console.log(this);
      
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
/* @import '../less/index.less'; */
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.container {
  width: 100%;
  min-height: 300px;
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 20%;
  position: absolute;
  top: 0;
  left: 20px;
  min-height: 300px;
}
.right {
  width: 80%;
  position: absolute;
  top: 0;
  left: 22%;
  text-align: left;
  line-height: 260px;
  border: 1px #ddd solid;
  min-height: 300px;
  overflow: hidden;
}
.players {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.players li a {
  display: block;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
  text-align: center;
}
.players li a:hover {
  background: orange;
  color: white;
}
</style>
