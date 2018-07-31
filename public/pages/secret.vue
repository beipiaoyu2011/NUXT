<template>
    <div>
        secret template
        <nuxt-link to="/">Go to Index</nuxt-link>
    </div>
</template>
<script>
export default {
    middleware: 'authenticated'
}
</script>

<style>

</style>
