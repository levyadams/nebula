<form class="content">
    <label>Nome

        <input type="text" bind:value={$user.name} />
    </label>
    <label>E-mail

        <input type="text" bind:value={$user.email} />
    </label>
    <label>Telefone

        <input type="text" bind:value={$user.phone} />
    </label>
    <button on:submit|preventDefault={(e)=>{submitForm(e)}}>Reach out</button>
  </form>
<p>
</p>

  <script>
      import { user } from "../store.js";

      let submitForm =(el)=>{
          var oReq = new XMLHttpRequest();
        oReq.open('POST','/');
        oReq.send(($user, 0, 2));

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