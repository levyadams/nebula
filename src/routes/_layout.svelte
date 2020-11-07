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
		window.document.body.style = `--color0: ${color_0};--color1: ${color_1};--color2: ${color_2};--color3: ${color_3};--color3: ${color_4};`
	});
</script>

<style>
	
	:global(body) {
		background: var(--color0);

		color: var(--color1);
		transition: background-color 0.3s;
	}
	:global(p){
		font-size:22px;
		color: var(--color1);
	}
	:global(input,textarea){
		font-size:18px;
		text-align: center;
		color: var(--color4);
		border-radius: 5px;
		border:none;
		box-shadow: none;
		background: var(--color3);
	}
	:global(textarea){
		height:200px;
		width:70%;
	}
	:global(button){
		border-radius: 0 0 10px 10px;
		border:none;
		background: var(--color3);
		color: var(--color1);
		width:100%;
		height:50px;
		font-size:24px;
		transition: color .5s ease-in-out;
		transition: background .5s ease-in-out;

	}
	:global(button:hover){
		background: var(--color1);
		color: var(--color0);
		transition: color .5s ease-in-out;
		transition: background .5s ease-in-out;

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
