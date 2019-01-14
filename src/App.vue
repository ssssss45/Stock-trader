<template>
    <div class="container">
        <appHeader :money = "money"></appHeader>
        <router-view :money = "money" :stocksList = "stocksList"></router-view>
    </div>
</template>

<script>
    function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var money = 10000;
	var stocksList = [
	            	{
	            		name: "BMW",
	            		low: 50,
	            		high: 200,
	            		owned : 0,
	            		currentPrice : 0
	            	},
	            	{
	            		name: "Google",
	            		low: 100,
	            		high: 250,
	            		owned : 0,
	            		currentPrice : 0
	            	},
	            	{
	            		name: "Apple",
	            		low: 150,
	            		high: 250,
	            		owned : 0,
	            		currentPrice : 0
	            	},
	            	{
	            		name: "Twitter",
	            		low: 10,
	            		high: 50,
	            		owned : 0,
	            		currentPrice : 0
	            	}
            	];

	import header from './components/header.vue';
    export default {
    components: {
        appHeader : header,
    },
        data: function() {
            return {
            	money : numberWithCommas(money),
            	stocksList : stocksList
            }
        },

        methods:{
        	newDay: function(){

        		for (var i = 0; i < this.stocksList.length; i++)
        		{
        			this.stocksList[i].currentPrice = getRandomInt(this.stocksList[i].low, this.stocksList[i].high);
        		}
        	}
        },
        created:function(){
        	this.newDay();
        }
    }
</script>

<style>
.container{
	width : 100%;
}

</style>
