<form action="#" class="content">
    <p>
        <label>Name<input type="text" bind:value={$user.name} /></label>
    </p>
    <p>
        <label>E-mail<input type="text" bind:value={$user.email} /></label>
    </p>
    <p>
        <label>Telephone<input type="text" bind:value={$user.phone} /></label>
    </p>

    <button on:click|preventDefault>Reach out</button>
</form>

<script>
    import { user } from "../store.js";

    let submitForm =(event)=>{

        fetch('/contact/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: $user
        });

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