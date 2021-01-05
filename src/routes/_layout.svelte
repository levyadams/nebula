<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>
<style>
	:global(main){
		height:auto;
		color:white;
	background: linear-gradient(-45deg, #240672, #860536, #085977, #0a755c);
	background-size: 400% 400%;
	animation: gradient 45s ease-in-out infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>

{#if segment != 'test'}

<Nav {segment}/>

<main>
	<slot></slot>
</main>
{/if}
{#if segment === 'test'}
<main>
	<slot></slot>
</main>
{/if}