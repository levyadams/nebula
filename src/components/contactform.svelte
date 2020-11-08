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
    <button on:click|preventDefault={submitForm}>Reach out</button>
  </form>
<p>
</p>

  <script>
      import { user } from "../store.js";

      let submitForm =(event)=>{
          event.preventDefault();
          var oReq = new XMLHttpRequest();
        oReq.open('POST','#');
        oReq.send($user);
          // Define what happens on successful data submission
        oReq.addEventListener( 'load', function( event ) {
            alert( 'Yeah! Data sent and response loaded.' );
        } );

        // Define what happens in case of error
        oReq.addEventListener(' error', function( event ) {
            alert( 'Oops! Something went wrong.' );
        } );
        return false;

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