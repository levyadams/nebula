<script>
	import Nav from '../components/Nav.svelte';
	import ThemeChanger from '../components/themeChanger.svelte';
	export let segment;
	import { afterUpdate } from 'svelte';


 	let color_0;
	let color_1;
	let color_2;
	let color_3;
	let color_4;

	afterUpdate(() => {
		window.document.body.style = `--color0: ${color_0};--color1: ${color_1};--color2: ${color_2};--color3: ${color_3};`
	});
</script>

<style>
	
	:global(body) {
		background: var(--color0);

		color: var(--color1);
		transition: background-color 0.3s;
	}
	
	main {
		position: relative;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>
<ThemeChanger 
	bind:color0={color_0}
	bind:color1={color_1}
	bind:color2={color_2}
	bind:color3={color_3}
	bind:color4={color_4}
/>

<main>
	<slot></slot>
</main>
