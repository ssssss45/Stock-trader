<template>
	<div class="stocks">
		<div v-for = "(stock, i) in stocksList">
        	<appStocks v-on:purchase="purchase" :name = "stock.name" :price = "stock.currentPrice" :id = "i"></appStocks>
    	</div>
	</div>
</template>

<script>
	import stock from './stock.vue';
    export default {
	    components: {
	        appStocks : stock,
	    },
	    props: ["stocksList"],
	    methods:{
        	purchase: function(e){
        		this.$emit('purchase', e);
        	}
        }
    }
</script>