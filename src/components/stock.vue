<template>
        <div class="stock">
        	<div class="stock-head panel-heading">
        	<div style = "display: inline-block;">
        		{{name}}
        	</div>
        	<div class = "price">
        		(Price: {{price}})
        	</div>
        	
        	</div>
        	<div class="stock-content panel-body">
        		<input type="number" min="0" step="1" placeholder="Quantity" class="stock-input form-control" v-model = "amount"></input>
        		<button class="stock-buy-button btn btn-success" @click="purchase">Buy</button>
        	</div>
        </div>
    
</template>

<script>
    export default {
	    components: {
	    },
		data: function(){
			return {
				amount : undefined
			}
		},
	    props: ["name", "price", "id"],
    methods:{
    		purchase: function(){
    			this.$emit('purchase', {
    				id: this.id,
    				amount: this.amount
    			});
    			this.text = undefined;
    		}
	    }
	}
</script>

<style>
	.stock{
		display : inline-block;
		width : 47%;

		border-style : solid;
		border-width : 1px;
		border-color : #ccc;

		margin: 10px;

		border-radius : 7px;
		float: left;
		cursor: pointer;
	}

	.stock-head{
		width : 100%;

		border-color : #ccc;
		color: green;
		font-weight: bold;
		background-color: #ccffcc;
	}

	.stock-buy-button{
		float: right;
		margin: auto;
	}

	.price{
		 display: inline-block; 
		 font-size: 10px;
		 padding-left: 5px;
	}

	.stock-input{
		width: 50%;
		display: inline-block;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>