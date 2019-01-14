<template>
    <div class="container">
        <appHeader v-on:newDay="newDay" v-on:save="save" v-on:load="load" :money = "money"></appHeader>
        <router-view v-on:purchase="purchase" v-on:sell="sell" :money = "money" :stocksList = "stocksList"></router-view>
    </div>
</template>

<script>
    function numberWithCommas(x) {
    	let temp = x;
	    return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const dbLink = "https://stock-trader-b15be.firebaseio.com/save.json";
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
        	},
        	purchase: function(e){
        		let cost = e.amount * this.stocksList[e.id].currentPrice;
        		if (cost > money)
        		{
        			alert("You don't have enough money!");
        		}
        		else
        		{
        			money -= cost;
        			this.money =  numberWithCommas(money);
        			this.stocksList[e.id].owned += Number(e.amount);
        		}
        	},
        	sell: function(e){
        		if (e.amount > this.stocksList[e.id])
        		{
        			alert("You don't have enough stocks!");
        		}
        		else
        		{
        			money += e.amount * this.stocksList[e.id].currentPrice;
        			this.money =  numberWithCommas(money);
        			this.stocksList[e.id].owned -= Number(e.amount);
        		}
        	},
        	save: function(){
        		this.$http.put(dbLink, {
        			money : money,
        			stockData : this.stocksList
        		});

        	},
        	load: function(){
        		this.$http.get(dbLink).then(response => {
        			return response.json();
        			
        		})
        		.then(data =>{
        			money = data.money;
        			this.money =  numberWithCommas(money);
        			this.stocksList = data.stockData;
        		})
        		
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
