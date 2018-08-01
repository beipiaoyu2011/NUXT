<template>
    <div>
        <h1>{{post.title}}</h1>
        <div>{{post.body}}</div>
        <nuxt-link to="/posts">back to post list</nuxt-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    asyncData({ params }, callback) {
        console.log(params.id);

        return axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => {
            callback(null, {
                post: res.data
            });
        });

    },
    head() {
        return {
            title: this.post.title
        }
    }

}
</script>

<style>
</style>
