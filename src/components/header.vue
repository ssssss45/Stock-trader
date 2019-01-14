<template>
        <div class="header">
        	<router-link to="/"><h4 class = "left-menu-items">Stock Trader</h4></router-link>
        	<router-link class = "left-menu-items" to="portfolio">Portfolio</router-link>
        	<router-link class = "left-menu-items" to="stocks">Stocks</router-link>
        	
        	<div class = "right-menu-items funds">Funds: $ {{ money }}</div>
        	<div class = "right-menu-items">Save & load</div>
        	<a class = "right-menu-items new-day" @click = "newDay">End Day</a>
        </div>
</template>

<script>
    export default {
	    components: {
	    },
	    props:["money"],
	    methods:{
	    	newDay : function(){
	    		this.$emit('newDay');
	    	}
	    }
    }
</script>

<style>
	.header{
		width: 100%;
		height: 75px;
		background-color: #eee;
		margin-top: 50px;
		margin-bottom: 25px;
		border-radius: 3px;
		padding-top: 25px;
		border-style: solid;
		border-width: 1px;
		border-color: lightgray;
		font-size: 15px;
	}

	.left-menu-items{
		display:inline-block;
		float:left;
		margin:auto;
		padding-left: 5%;
		color: gray;
	}

	.right-menu-items{
		display:inline-block;
		float:right;
		margin:auto;
		padding-right: 5%;
		color: gray;
	}

	.funds{
		font-weight: bold;
	}

	.new-day{
		cursor: pointer;
	}
</style>