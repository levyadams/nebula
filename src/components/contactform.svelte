<form name="contact" method="POST" data-netlify="true">
    <p>
        <label>Name<input type="text"/></label>
    </p>
    <p>
        <label>E-mail<input type="text" /></label>
    </p>
    <p>
        <label>Telephone<input type="text" /></label>
    </p>
    <input type="hidden" name="form-name" value="contact" />

</form>
<button type="submit">Reach out</button>

<script>
    import { user } from "../store.js";

    let submitForm =(event)=>{
        let newshit = JSON.stringify($user)
        fetch("#", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: { "form-name":  newshit}
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      event.preventDefault();
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