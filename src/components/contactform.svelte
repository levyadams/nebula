
<script>
    let form;
     let formSubmit;
     let error;
    import { user } from "../store.js";
    import { cubicInOut } from 'svelte/easing';
    
    let submitForm =(event)=>{
        let formdata = new FormData();
        formdata.append('name',`${user.name}`);
        formdata.append('email',`${user.email}`);
        formdata.append('telephone',`${user.telephone}`);
            fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formdata,
          })
            .then(() => {
                formSubmit = true;
                error = false;
            }
            ).catch(error => {
                formSubmit = true;
                error = true;
                console.warn(error);
            });
          event.preventDefault();
        }
    let toggleDisplayProp =()=>{
        if(formSubmit){
    
        }
    };
    </script>
    
    {#if formSubmit && !error}
    <div
      class="confirm-text">
        <h2 style="font-size:45px;">Got it!</h2>
        <h3>We will be reaching out shortly.</h3>
    </div>
    {/if}
    {#if formSubmit && error}
    <div class="error-text">
        <h2>Uh oh.. :(</h2>
        <h3>something went terribly wrong. Please try again later.</h3>
    </div>
    {/if}
    {#if !formSubmit}
    <form
     bind:this={form} name="contact" id="contact" method="POST" data-netlify="true">
        <p>
            <label style="width:100%;">Name<input type="text" name="name" style="width:70%; padding:8px;" bind:value={$user.name} /></label>
        </p>
        <p>
            <label>E-mail<input style="width:65%;" type="text" name="email" bind:value={$user.email} /></label>
        </p>
        <p>
            <label>Telephone<input style="width:50%;" type="text" name="telephone" bind:value={$user.phone} /></label>
        </p>
        <label for="services">I am interested in:
        <select bind:value={user.dropdown} name="services" id="services" form="contact">
        <option value="website">a website for my business!</option>
        <option value="consultation">web consultation!</option>
        <option value="animation">online advertisement!</option>
        <option value="unity">3D interactive web experience!</option>
        </select>
        <input type="hidden" name="form-name" value="contact" />
        </label>
        <p>
            <label>Additional info<textarea class="longInput" cols="30" rows="10" name="additional" bind:value={$user.message} /></label>
        </p>
        <button on:click|preventDefault={submitForm} type="submit">Reach out</button>
    </form>
    {/if}
    
    
    <style lang="scss">
      
        h2,h3{
            text-align: center;
        }
        h2{
            font-size:45px;
        }
        h3{
            font-size:34px;
        }
        form,.confirm-text,.error-text{
            position: absolute;
            left:0;
            right:0;
            top:285px;
            width:40%;
            margin:0 auto;
        }

    
        @media screen and (max-width:759px){
            form{
            width:calc( 100% - 60px );
            }
        }

        form{
            button{
                background:white;
                width:100%;
                height:50px;
                font-size:30px;
                border:none;
                box-shadow: 0 0 14px 2px black;
                border-radius:0 0px 15px 15px;
            }
            select{
                width:100%;
                height:60px;
                text-align-last:right;
                padding-right:32%;
                font-size:20px;
                @media screen and (max-width:1055px) {
                    font-size:15px;
                }
               
            }
           
        }
        p{
            &:first-child{
                input{
                    border-radius:15px 15px 0 0;

                }
            }
        }

    
        p>label{
            display: flex;
            justify-content: space-between;
        }
    </style>