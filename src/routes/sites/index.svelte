<script>
	import { fly, fade } from "svelte/transition";

	// import IntersectionObserver from "../../components/IntersectionObserver.svelte";
	let outro = false;

</script>

<style>
	h1,
	h2,
	p {
		text-align: center;
		margin: 0 auto 40px 0;
	}

	h1 {
		font-size: 42px;
		font-weight: 500;
		margin: 0 0 0.5em 0;
	}
	h2 {
		font-size: 44px;
	}

	p {
		font-size: 28px;
		margin: 1em auto;
	}
	.intro-div {
		margin-bottom: 100px;
	}
	.intro-span {
		font-size: 18px;
	}
	.linked-eyebrow {
		margin-bottom: 100px;
	}
	.small-headline {
		margin-bottom: 100px;
	}
	.worked-list {
		list-style: none;
		font-size: 24px;
		margin: 0 auto;
		width: 80%;
		text-align: center;
		padding: 0;
	}
	.worked-list li {
		margin-bottom: 20px;
	}
	.image-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.howitworks-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	img {
		width:auto;
		max-width: 600px;
	}
	@media screen and (max-width:760px){
		img{
			max-width: 100%;
		}
	}
	.big-button {
		border: 1px solid black;
		border-radius: 10px;
		box-shadow: 0 0 9px 1px black;
		font-size: 24px;
		text-decoration: none;
		padding: 8px;
		text-align: center;
		transition: all 0.95s ease-in-out;
	}
	.big-button:hover {
		font-size: 28px;
		color: white;
		box-shadow: 0 0 0px 0px black;
		background-color: black;
		transition: all 0.8s ease-in-out;
	}
	.hidden{
		position: absolute;
		left:0;
		right:0;
		margin:0 auto;
	}

	:global(main){
		color:white;
	background: linear-gradient(-45deg, #240672, #860536, #085977, #0a755c);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
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

<svelte:head>
	<title>Nebula Development</title>
</svelte:head>

<div class="anim-body" transition:fly={{y:600,duration:1600}} class:hidden={outro} on:outrostart="{() =>outro=true}">
	<div class="intro-div">
		<h1 style="margin-top:10px;">
			<span class="intro-span">My name is</span><br />
			Levy Adams
		</h1>
		<div class="image-container">
			<img
				style="border-radius:8px;box-shadow:0px 8px 8px 0px black;"
				src="gm.jpg"
				alt="gm vision? lol" />
		</div>
		<a href="https://www.linkedin.com/in/levy-adams-7ba962151/"><p
				style="font-size:14px;"
				class="linked-eyebrow">
				connect on LinkedIn
			</p></a>
	</div>

	<!-- <IntersectionObserver let:intersecting top={-20}>
		{#if intersecting}
			<div 
				transition:fade={{ duration: 700 }}
				class="howitworks-container">
				<div>
					<h2>Like it or not<br />making money online isn't easy!</h2>
					<p>The game is rigged with pitfalls and shortcomings.</p>
				
				</div>
				<a class="big-button" href="/dev/examples">See live examples</a>
			</div>
		{/if}
	</IntersectionObserver> -->
</div>
