<script>
	import { onMount, afterUpdate, beforeUpdate } from "svelte";
	import { fly, fade } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import Carousel from "../components/carousel.svelte";
	import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
	import Siema from "siema";
	import { onInterval } from "../utils.js";

	// import IntersectionObserver from "../../components/IntersectionObserver.svelte";
	let outro = false;
	let mainSiema, workSiema;
	let mainImages = [
		{
			src: "gm.jpg",
			alt: "Levy at GM",
		},
		{
			src: "mrm.jpg",
			alt: "Levy at mrm",
		},
	];

	onMount(() => {
		mainSiema = new Siema({
			selector: ".siema",
			duration: 200,
			easing: "ease-out",
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: false,
			rtl: false,
		});

		workSiema = new Siema({
			selector: ".siema-work",
			duration: 200,
			easing: "ease-out",
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: true,
			rtl: false,
		});
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

	onInterval(() => workSiema.next(), 2000);
</script>

<style lang="scss">
	h1,
	p {
		text-align: center;
		margin: 0 auto 40px 0;
	}

	h1 {
		font-size: 42px;
		font-weight: 500;
		margin: 0 0 0.5em 0;
	}

	p {
		font-size: 28px;
		margin: 1em auto;
	}
	.intro-div {
		padding-bottom: 50px;
	}
	.intro-span {
		font-size: 18px;
	}
	.linked-eyebrow {
		margin-bottom: 30px;
	}

	.image-container {
		max-width: 600px;
		margin: 0 auto;
		overflow: hidden;
		img {
			width: 100%;
			border-radius: 5px;
			@media screen and (max-width: 760px) {
				max-width: 95%;
			}
		}
	}
	.siema-work{
		background:none;
		max-width:250px;
		margin:0 auto;
	}

	/* .hidden{
		position: absolute;
		left:0;
		right:0;
		margin:0 auto;
	} */
</style>

<svelte:head>
	<title>Nebula Development</title>
	<!-- <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"> -->
</svelte:head>

<div class="anim-body">
	<div class="intro-div">
		<h1><span class="intro-span">My name is</span><br /> Levy Adams</h1>
		<div class="image-container">
			<div class="siema">
				<img src="gm.jpg" alt="Levy at GM!" />
				<img src="mrm.jpg" alt="Levy at IPG/MRM!" />
			</div>
		</div>
		<a href="https://www.linkedin.com/in/levy-adams-7ba962151/"><p
				style="font-size:14px;"
				class="linked-eyebrow">
				connect on LinkedIn
			</p></a>

			<h3 style="text-align:center">I've built websites and interactive assets for:</h3>


				<div class="siema-work">
					<img
					style="width:220px;background:rgba(255, 255, 255, 1);border-radius:8px;padding:12px"
					src="bcbsmlogo.png"
					alt="BCBSM logo" />
					<img
					style="width:220px;background:rgba(255, 255, 255, 0.9);border-radius:8px;padding:12px"
					src="aaalogo.png"
					alt="AAA logo" />
					<img
					style="width:220px;background:rgba(255, 255, 255, 0.7);border-radius:8px;padding:12px"
					src="caddylogo.png"
					alt="Caddilac logo" />
					<img
					style="width:250px"
					src="buicklogo.jpeg"
					alt="Buick logo" />
					<img
					style="width:220px;background:rgba(255, 255, 255, 0.7);border-radius:8px;padding:12px"
					src="chevylogo.png"
					alt="Chevrolet logo" />
					<img
						src="gmlogo.png"
						alt="General Motors logo" />
					<img
					style="width:100%"
					src="cokelogo.png"
					alt="Coca-cola logo" />
					<img
					style="width:250px"
					src="isobarlogo.png"
					alt="Isobar logo" />
					

					
				</div>
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
