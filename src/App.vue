<template>
    <div class="container">
        <appHeader></appHeader>
        <router-view></router-view>
    </div>
</template>

<script>
	import header from './components/header.vue';
    export default {
    components: {
        appHeader : header,
    },

    }
</script>

<style>

</style>
