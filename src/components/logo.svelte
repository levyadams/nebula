
<script>
    import { send, receive } from "crossfade";
    export let introActive = false;
  </script>

<style>

.logo-container{
    position: absolute;
    right:0;
    top: -44px;
}
.absolute{
    margin:50px auto;
    left: 0;
}
.absolute .logo-container{
    width:166px;

}
.logo{
    margin-right:20px;
}
.mobile-logo{
    display: none;
}
.intro{
    font-size:53px;
    width:550px;
}

@media only screen and (max-width: 759px) {
    .intro{
        text-align: center;
        width:100%;
    }
  .logo{
      display: none;
    }
    .mobile-logo{
        display: inline-block;
        margin-top:4.5px;
        margin-right:20px;
    }
    .absolute >.logo-container{
        width:100%;
        text-align:center;
    }
  
}

</style>

<div class="logo-container" class:intro={introActive} class:absolute={introActive} out:send="{{key: 'title'}}" in:receive="{{key: 'title'}}">
    <h2 class="logo"  >Joystick Nebula</h2>
    <h2 class="mobile-logo">JoyNeb</h2>
</div>