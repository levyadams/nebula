<style>

	.unity-body{
		position: absolute;
		left:0;
		right:0;
		width:90%;
		margin:0 auto;
		text-align: center;
	}
</style>

<script>
  import { send, receive } from "crossfade";
  import Logo from '../components/logo.svelte';
</script>

	<Logo/>
	<h1 class="unity-body" out:send="{{key: 'title-body'}}" in:receive="{{key: 'title-body'}}">
		unity go here
	</h1>