
<script>
    import { send, receive } from "crossfade";
    import Logo from '../components/logo.svelte';
    import ContactForm from '../components/contactform.svelte';
    import { cubicInOut } from 'svelte/easing';
    import fadeScale from 'fadescale'

    let formSubmitted;
</script>

<Logo />

<div class="form-container">
    {#if formSubmitted}<h1 transition:fadeScale={{
        delay: 650,
        duration: 3000,
        easing: cubicInOut,
        baseScale: 0.5
    }}>;)</h1>{/if}
    {#if !formSubmitted}<h1 transition:fadeScale={{
        delay: 250,
        duration: 1500,
        easing: cubicInOut,
        baseScale: 0.5
    }}>Hit me up..</h1>{/if}
    <ContactForm
    bind:formSubmit={formSubmitted}
     />
</div>

<style>
h1{
    position:absolute;
    left:0;
    right:0;
    margin:0 auto;
    width:40%;
    text-align:center;

}
</style>