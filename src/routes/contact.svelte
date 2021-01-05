
<script>
    import ContactForm from '../components/contactform.svelte';
    import { cubicInOut } from 'svelte/easing';

    let formSubmitted;
</script>


<div class="form-container">
    {#if formSubmitted}<h1>;)</h1>{/if}
    {#if !formSubmitted}<h1>Hit me up..</h1>{/if}
    <ContactForm
    bind:formSubmit={formSubmitted}
     />
</div>

<style>
h1{
    padding-top:40px;
    margin:0 auto;
    width:40%;
    text-align:center;

}
:global(main){
    height:100vh;
}
</style>