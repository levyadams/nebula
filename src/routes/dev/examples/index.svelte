<script>
	import { fly } from "svelte/transition";
let outro = false;
</script>
<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	.hidden{
		position: absolute;
	}
	:global(main){
		color:white;
	background: linear-gradient(-45deg, #240672, #860536, #085977, #0a755c);
	background-size: 400% 400%;
	animation: gradient 8s ease-in-out infinite;
}
</style>


<svelte:head>
	<title>Website Examples</title>
</svelte:head>
<div class="body" style="height:100vh;" transition:fly={{y:600,duration:1600}} class:hidden={outro} on:outrostart="{() =>outro=true}">
<h1>Website examples</h1>

<nav>
	<ul>
		<li><a  href='./sites/professional-profile-web'>professional profile</a></li>
	</ul>
</nav>
</div>