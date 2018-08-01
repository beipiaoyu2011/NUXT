<template>
    <div>
        post
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <nuxt-link :to="{name: 'posts-id', params:{id: post.id}}">{{post.title}}</nuxt-link>
            </li>
        </ul>
        <nuxt-link to="/">back to home page</nuxt-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
    asyncData({ app }, callback) {
        var p1 = new Promise(resolve => {
            app.$axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
                resolve(res.data);
            });
        });
        p1.then(res => {
            // console.log(res);
            callback(null, {
                posts: res.slice(0, 5)
            });
        })
    },
    head: {
        title: 'List of posts'
    }
}
</script>

<style>
</style>
