
<script>
let form;
let submitForm =(event)=>{
    let formdata = new FormData();
    formdata.append('name',`${user.name}`);
    formdata.append('email',`${user.email}`);
    formdata.append('telephone',`${user.telephone}`);
        fetch("/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formdata,
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      event.preventDefault();
    }

    import { user } from "../store.js";

   
</script>

<form bind:this={form} name="contact" method="POST" data-netlify="true">
    <p>
        <label>Name<input type="text" name="name" bind:value={$user.name} /></label>
    </p>
    <p>
        <label>E-mail<input type="text" name="email" bind:value={$user.email} /></label>
    </p>
    <p>
        <label>Telephone<input type="text" name="telephone" bind:value={$user.phone} /></label>
    </p>
    <input type="hidden" name="form-name" value="contact" />

    <button on:submit|preventDefault={submitForm} type="submit">Reach out</button>
</form>


<style>
    form{
        max-width:30%;
        margin:0 auto;
    }

    @media screen and (max-width:759px){
        form{
            max-width:100%;
        }
    }

    p>label{
        display: flex;
        justify-content: space-between;
    }
</style>