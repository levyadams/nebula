<script>
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import { send, receive } from "crossfade";

	import IntersectionObserver from "../../components/IntersectionObserver.svelte";
	import fadeScale from "fadescale";
	let outro = false;

	onMount(async () => {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on("init", (user) => {
				if (!user) {
					window.netlifyIdentity.on("login", () => {
						document.location.href = "/admin/";
					});
				}
			});
		}
	});
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
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js">
	</script>
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
		<h2 class="small-headline">
			I build fortune 500 web platforms as a day job.
		</h2>
		<p>
			We are going to deploy your business website like the
			<b>pros</b>.
		</p>
	</div>

	<div class="worked-div">
		<IntersectionObserver let:intersecting once="true" top={-10}>
			{#if intersecting}
				<h2
					transition:fadeScale={{ delay: 1000, easing: cubicInOut, baseScale: 0.5 }}
					>
					I have built websites and interactive web assets for:
				</h2>
			{/if}
		</IntersectionObserver>

		<IntersectionObserver let:intersecting once="true" top={1}>
			{#if intersecting}
			<ul class="worked-list">
				<IntersectionObserver let:intersecting once="true" top={-20}>
					{#if intersecting}
						<li 
							transition:fly={{delay:200, x: 200, duration: 900 }}>
							IPG
						</li>
					{/if}
				</IntersectionObserver>

				<IntersectionObserver let:intersecting once="true" top={-20}>
					{#if intersecting}
						<li 
							transition:fly={{delay:200, x: 200, duration: 900 }}>
							General Motors
						</li>
					{/if}
				</IntersectionObserver>

				<IntersectionObserver let:intersecting once="true" top={-20}>
					{#if intersecting}
						<li 
							transition:fly={{ delay:200, x: 200, duration: 900 }}>
							AAA
						</li>
					{/if}
				</IntersectionObserver>

				<IntersectionObserver let:intersecting once="true" top={-3}>
					{#if intersecting}
						<li
							transition:fly={{ delay:200,x: 200, duration: 900 }}>
							Blue Cross Blue Shield
						</li>
					{/if}
				</IntersectionObserver>

				<IntersectionObserver let:intersecting once="true" top={-20}>
					{#if intersecting}
						<li
							transition:fly={{delay:200, x: 200, duration: 900 }}>
							..And many more!
						</li>
						<a
							href="https://www.linkedin.com/in/levy-adams-7ba962151/"><p
								style="font-size:14px;"
								class="linked-eyebrow">
								connect on LinkedIn
							</p></a>
					{/if}
				</IntersectionObserver>
			</ul>
			{/if}
		</IntersectionObserver>

	</div>
	<IntersectionObserver let:intersecting top={-20}>
		{#if intersecting}
			<div 
				transition:fade={{ duration: 700 }}
				class="howitworks-container">
				<div>
					<h2>Like it or not<br />making money online isn't easy!</h2>
					<p>The game is rigged with pitfalls and shortcomings.</p>
					<p>
						The reason I make big money is because I look at your
						business goals as a whole.
					</p>
					<p>
						When my clients succeed online they come back for more.
					</p>
				</div>
				<a class="big-button" href="/dev/examples">See live examples</a>
			</div>
		{/if}
	</IntersectionObserver>
</div>
