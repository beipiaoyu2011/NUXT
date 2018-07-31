<template>
    <div class="player">
        <p>#{{id}}</p>

        <p>{{number}}</p>
    </div>
</template>

<script>
export default {
    validate({params, query, store}){
        console.log(params, query, store);
        return !isNaN(params.id);
    },
    asyncData({ params, env }) {
        const user = env.users.find(user => user.id == params.id);
        if (!user) {
            return error({ message: "user no found", statusCode: 404 })
        }
        return user;
    }
}
</script>

<style>
.player {
  text-align: center;
  font-family: sans-serif;
}
.player p {
  line-height: 3;
  margin-top: 20px;
}
</style>
