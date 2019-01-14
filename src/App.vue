<template>
    <div class="container">
        <appHeader :money = "money"></appHeader>
        <router-view :money = "money"></router-view>
    </div>
</template>

<script>
    function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	var money = 10000;

	import header from './components/header.vue';
    export default {
    components: {
        appHeader : header,
    },
        data: function() {
            return {
            	money : numberWithCommas(money),
            	stocksList : [
	            	{
	            		name: "BMW",
	            		low: 50,
	            		high: 200
	            	},
	            	{
	            		name: "Google",
	            		low: 100,
	            		high: 250
	            	},
	            	{
	            		name: "Apple",
	            		low: 150,
	            		high: 250
	            	},
	            	{
	            		name: "Twitter",
	            		low: 10,
	            		high: 50
	            	}
            	]
            }
        }
    }
</script>

<style>

</style>
