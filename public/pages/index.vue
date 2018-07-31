<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <!-- <Loading></Loading> -->
      <!-- <h1 class="title">
        w
      </h1>
      <h2 class="subtitle">
        <img :src="title" alt="">
      </h2>
      <h2>请求列表11</h2> -->
      <nuxt-link to="/about">Go to about</nuxt-link>
      <br>
      <nuxt-link to="/secret">Go to secret</nuxt-link>
      <br>
      <button @click="alertLog">{{$store.state.count}}</button>
      <div>{{content_two}}</div>
      <ul>
        <li v-for="(key, value) in content" :key="value">{{value}} : {{key}}</li>
      </ul>
      <!-- <ul>
        <li v-for="(n, v) in content_two" :key="n">{{v}} : {{n}}</li>
      </ul> -->
      <!-- <div>url: {{content.url}}</div> -->

      <!-- <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div> -->
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Loading from '~/components/loading.vue'
import img from '@@/public/assets/tou.jpg'
// import axios from '@/plugins/axios';
import axios from 'axios';
import { resolve } from 'url';
import j1 from '@@/JSON_1.json';

export default {
  // fetch({store, params}){
  //   return axios.get("http://my-api/stars").then(res => {
  //     // store.commit('setStars', res.data);
  //   });
  // },
  data() {
    return {
      title: img,
      content: null,
      content_two: null
    }
  },
  // mounted() {
  //   console.log(this.$nuxt);    
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();
  //   })
  // },
  created() {
    // console.log('===========', store);    
    // console.log(this);
    // console.log(this.$nuxt);
    // this.content_two = JSON.stringify(this.$options);


  },
  components: {
    AppLogo,
    Loading
  },
  asyncData({ params, app, store }, callback) {
    console.log('======app=======');
    console.log(store);    
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
        callback(null, { content: res[0], content_two: res[1] });

      });
    }
    // let r1 = () => {
    //   return axios.get('/get', {
    //     params: {
    //       foo1: 'bar1',
    //       foo2: 'bar2'
    //     }
    //   });
    // };
    // let r2 = () => {
    //   return axios.get('/get', {
    //     params: {
    //       foo3: 'bar3',
    //       foo4: 'bar5'
    //     }
    //   });
    // };

    // axios.all([r1(), r2()]).then(axios.spread((res1, res2) => {
    //   callback(null, { content: res1.data, content_two: res2.data })
    // }));

  },

  methods: {
    alertLog() {
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
</style>
