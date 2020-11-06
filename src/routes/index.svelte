
<script>
	import Logo from '../components/logo.svelte';
	import { send, receive } from "crossfade";
  </script>

<style>
.index-container{
	position: relative;
}

.container{
	margin:0 auto;
	width: 700px;
	top:56px;
}
.home-description{
	position: relative;
	width: 700px;
	text-align: center;
	margin-left:auto;
	padding-left:10px;
	margin-right:auto;
	font-size:20px;
	top:160px;
}
.home-description > p{
	position: absolute;
	left:0;
	right:0;
}
@media only screen and (max-width: 759px) {

	.home-description{
		width:290px;

	}

}
</style>

<svelte:head>
	<title>Joystick Nebula</title>
</svelte:head>


<Logo 
introActive = true;
/>
<div class="home-description">
	<p out:send="{{key: 'title-body'}}" >Shine deep..</p>
</div>
