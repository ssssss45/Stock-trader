<template>
        <div class="header">
        	<router-link to="/"><h4 class = "left-menu-items">Stock Trader</h4></router-link>
        	<router-link class = "left-menu-items" to="portfolio">Portfolio</router-link>
        	<router-link class = "left-menu-items" to="stocks">Stocks</router-link>
        	
        	<div class = "right-menu-items funds">Funds: $ {{ money }}</div>
        	<div class = "right-menu-items dropdown">
        		<span>Save & load</span>
        		<div class="dropdown-content">
					<div @click = "save">Save</div>
					<br>
					<div @click = "load">Load</div>
				</div>
        	</div>
        	<div class = "right-menu-items new-day" @click = "newDay">End Day</div>
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
	    	},
	    	save: function(){
	    		this.$emit('save');
		    },
		    load: function(){
	    		this.$emit('load');
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

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		padding: 12px 16px;
		z-index: 1;
		cursor: pointer;
	}
	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>