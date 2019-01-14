<template>
	<div class="stocks">
		<div v-if ="$route.path == stocksName" v-for = "(stock, i) in stocksList">
        	<appStocks v-on:purchase="purchase" :name = "stock.name" :price = "stock.currentPrice" :id = "i" :buy = true></appStocks>
    	</div>
    	<div v-if ="$route.path != stocksName" v-for = "(stock, i) in stocksList">
        	<appStocks v-if = "stock.owned > 0" v-on:sell="sell" :name = "stock.name" :price = "stock.currentPrice" :id = "i" :buy = false :quantity = "stock.owned"></appStocks>
    	</div>
	</div>
</template>

<script>
	import stock from './stock.vue';
    export default {
	    components: {
	        appStocks : stock
	    },
	    data:function(){
			return {
				stocksName : "/stocks"
			}
		},
	    props: ["stocksList"],
	    methods:{
        	purchase: function(e){
        		this.$emit('purchase', e);
        	},
        	sell: function(e){
        		this.$emit('sell', e);
        	}
        }
    }
</script>