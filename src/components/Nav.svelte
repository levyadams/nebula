<script>
	export let segment;
	import Logo from './logo.svelte';
	let currentColor;

	$:{
		if(segment === undefined){
			currentColor = 'white';
		}
		if(segment === 'contact'){
			currentColor="rgb(251, 107, 107)";
		}
		if(segment === 'examples'){
			currentColor="rgb(119, 102, 244)";
		}
	}
</script>

<style>
	nav {
		background:black;
		font-weight: 300;
		padding: 1.5em 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		font-size:20px;
		text-transform: uppercase;
		
	}
	@media screen and (max-width:768px){
		li{
			font-size:14px;
		}
	}

	.selected {
		position: relative;
		display: inline-block;
		color:rgb(255, 255, 255);
		font-weight: bold;
		transition:all .4s ease-in-out;
	}
	.selected1 {
		position: relative;
		display: inline-block;
		color:rgb(119, 102, 244);
		font-weight: bold;
		transition:all .4s ease-in-out;
	}
	.selected2 {
		position: relative;
		display: inline-block;
		color:rgb(251, 107, 107);
		font-weight: bold;
		transition:all .4s ease-in-out;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
<Logo bind:color_0={currentColor}/>
<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='/dev/'>about</a></li>
		<li><a class='{segment === "examples" ? "selected1" : ""}' href='/sites/'>examples</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "contact" ? "selected2" : ""}' href='/dev/contact'>contact</a></li>
	</ul>
</nav>