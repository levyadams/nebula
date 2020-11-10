<form name="contact" method="POST" data-netlify="true">
    <p>
        <label>Name<input type="text" bind:value={$user.name} /></label>
    </p>
    <p>
        <label>E-mail<input type="text" bind:value={$user.email} /></label>
    </p>
    <p>
        <label>Telephone<input type="text" bind:value={$user.phone} /></label>
    </p>
    <input type="hidden" name="form-name" value="contact" />

    <button on:submit|preventDefault={submitForm} type="submit">Reach out</button>
</form>

<script>
    import { user } from "../store.js";

    let submitForm =(event)=>{

        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": $user })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    }
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