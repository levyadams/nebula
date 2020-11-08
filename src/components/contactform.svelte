<form class="content">
    <p>
        <label>Name<input type="text" bind:value={$user.name} /></label>
    </p>
    <p>
        <label>E-mail<input type="text" bind:value={$user.email} /></label>
    </p>
    <p>
        <label>Telephone<input type="text" bind:value={$user.phone} /></label>
    </p>

    <button on:click|preventDefault={submitForm}>Reach out</button>
</form>

<script>
    import { user } from "../store.js";

    let submitForm =(event)=>{
        
        event.preventDefault();

        var oReq = new XMLHttpRequest();
       
        oReq.open('POST','#');

        oReq.send($user);

    };
</script>

<style>
    form{
        max-width:30%;
        margin:0 auto;
    }
    p>label{
        display: flex;
        justify-content: space-between;
    }
</style>