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

    <button on:submit|preventDefault type="submit">Reach out</button>
</form>

<script>
    import { user } from "../store.js";

    let submitForm =(event)=>{

        fetch('#', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: $user
        }).then(response => {
            if (response.ok) {
            return response.json()
            } else if(response.status === 404) {
            return Promise.reject('error 404')
            } else {
            return Promise.reject('some other error: ' + response.status)
            }
        })
        .then(data => console.log('data is', data))
        .catch(error => console.log('error is', error));

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