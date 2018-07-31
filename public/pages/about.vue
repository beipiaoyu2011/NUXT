<template>
    <div>
        <div>about from {{name}}</div>
        <nuxt-link to="/">Go to Index</nuxt-link>
    </div>
</template>
<script>
export default {
    layout: 'dark',
    asyncData({ req }) {
        return {
            name: req ? 'server' : 'client'
        }
    }
}
</script>
