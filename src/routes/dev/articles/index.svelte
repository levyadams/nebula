<script context="module">

	export function preload({ params, query }) {
		return this.fetch(`/dev/articles.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import { fly } from "svelte/transition";
	export let posts;
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
	animation: gradient 15s ease infinite;
}
</style>

<svelte:head>
	<title>Tech Articles</title>
</svelte:head>
<div class="anim-body" style="height:100vh;" transition:fly={{y:600,duration:1600}} class:hidden={outro} on:outrostart="{() =>outro=true}">
<h1>Recent articles</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='/dev/articles/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>
</div>