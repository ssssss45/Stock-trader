<template>
	<div class="main">
		<h1>Trade or View your Portfolio</h1>
		You may save & load your data
		<br>
		Click on 'End Day' to begin a new Day!
		<hr>
		<h3>Your funds: $ {{money}}</h3>

	</div>
</template>

<script>
    export default {
	    components: {
	    },
	    props:["money"],
    }
</script>

<style>
	.main{
		padding-left: 10px;
		border-radius: 3px;
		border-style: solid;
		border-width: 1px;
		border-color: gray;
		margin: auto;
		padding-bottom: 30px;
	}
</style>