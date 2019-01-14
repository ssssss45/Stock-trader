<template>
	<div class="stocks">
		<div v-for = "stock in stocksList">
        	<appStocks :name = "stock.name" :price = "stock.currentPrice"></appStocks>
    	</div>
	</div>
</template>

<script>
	import stock from './stock.vue';
    export default {
	    components: {
	        appStocks : stock,
	    },
	    props: ["stocksList"]
    }
</script>