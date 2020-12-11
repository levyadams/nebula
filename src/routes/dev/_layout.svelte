<script>
	import Nav from '../../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: rgb(82, 80, 80);
		overflow: hidden;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	:global(body) {
		background: white;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>