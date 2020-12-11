<script>
    import { send, receive } from "crossfade";
    import { fly, fade } from "svelte/transition";

     let counter = 0;
    $:{
        console.log(counter)
    }


</script>

<div class="background-container"  out:send="{{key: 'intro'}}" in:receive="{{key: 'intro'}}">
    <div class="top-circle"></div>
    <div class="top-dashed"></div>

    <div class="bottom-circle"></div>
    <div class="bottom-dashed"></div>
</div>
<div class="intro-container" transition:fade={{delay:550,duration:0}}>
</div>
<div  class="img-wrapper" out:send="{{key: 'avatar'}}" in:receive="{{key: 'avatar'}}">
    <img src="profile.jpeg" class="profile-img" alt="Levy Anthony Adams Profile Picture">

    <svg
    class="ring"
    width="320px"
    height="320px"
    version="1.1"viewBox="0 0 210 297"xmlns="http://www.w3.org/2000/svg"xmlns:cc="http://creativecommons.org/ns#"xmlns:dc="http://purl.org/dc/elements/1.1/"xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <path d="m185.03 147.03c0.29362 28.491-17.677 55.422-42.969 67.929-30.732 16.052-71.107 11.16-96.601-12.53-20.34-18.105-29.779-47.749-22.423-74.131 7.5005-29.208 33.643-51.543 62.962-56.943 32.155-6.6565 68.021 6.741 86.315 34.375 8.1843 12.119 12.747 26.66 12.716 41.3z" fill="none" stroke-width="1.8428" />
    <path d="m63.5 88.446c0.32868 8.4746-9.0805 15.209-16.996 12.164-8.1276-2.4222-11.467-13.5-6.0327-20.011 4.9141-6.9121 16.477-6.5003 20.887 0.74378 1.3908 2.0894 2.1456 4.5929 2.1413 7.1029z" stroke-width="3" />
    </svg>

    <svg
    class="ring1"
    width="320px"
    height="320px"
    version="1.1"viewBox="0 0 210 297"xmlns="http://www.w3.org/2000/svg"xmlns:cc="http://creativecommons.org/ns#"xmlns:dc="http://purl.org/dc/elements/1.1/"xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <path transform="matrix(.35289 0 0 .33592 -83.215 -98.67)"d="m526.81 501.29a232.99 230.14 0 0 0-118.69 32.295 36.417 38.256 0 0 1 7.6328 23.436 36.417 38.256 0 0 1-36.416 38.258 36.417 38.256 0 0 1-28.443-14.369 232.99 230.14 0 0 0-56.74 150.52 232.99 230.14 0 0 0 232.99 230.14 232.99 230.14 0 0 0 232.99-230.14 232.99 230.14 0 0 0-232.99-230.13 232.99 230.14 0 0 0-0.33594 0zm-175.92 79.619a232.99 230.14 0 0 1 57.227-47.324 36.417 38.256 0 0 0-28.783-14.82 36.417 38.256 0 0 0-36.418 38.256 36.417 38.256 0 0 0 7.9746 23.889z"fill="none"stroke-width="5.3523" />
    </svg>

</div>
<div class="layout-container" out:send="{{key: 'label'}}" in:receive="{{key: 'label'}}" >
    <h1 style='padding:10px'>Levy Anthony Adams</h1>
    <h2>Interactive Web Developer</h2>
</div>
<h2 class="list-eyebrow" style="margin-top:40px;font-size:14px;" out:send="{{key: 'eyebrow'}}" in:receive="{{key: 'eyebrow'}}">Please Choose below</h2>

<nav role="navigation" class="nav-list" out:send="{{key: 'nav'}}" in:receive="{{key: 'nav'}}">
    <ul>
		<li><a href='./sites/professional-profile-web/'>Home</a></li>
		<li><a href='./sites/professional-profile-web/work-history'>Work History</a></li>
        <li><a href="./sites/professional-profile-web/projects">Projects</a></li>
        <li><a href="./sites/professional-profile-web/contact">Contact</a></li>
    </ul>
</nav>

<div class="button-container">
    <ul>
        <li><button  on:click={()=>counter=0}>Technical Skills</button></li>
        <li><button  on:click={()=>counter=1}>Business Skills</button></li>
        <li><button  on:click={()=>counter=2}>Physical Skills</button></li>
    </ul>
</div>

<div class="technical-container" class:visible={counter === 0}>
    <ul>
        <li>Have built houses, bridges, parking garages, and various other carpentry related things.</li>
        <li>Can basically wire an entire house myself (no warranties on that one ;) )</li>
        <li>Handy with a wrench with mechanical and general piping issues.</li>
        <li>Pretty good at building websites.</li>
    </ul>
</div>

<div class="business-container" class:visible="{counter === 1}">
    <ul>
        <li>Natural born salesman</li>
        <li>Good at whiteboarding</li>
        <li>Good at state applications and regulation reading/understanding.</li>
    </ul>
</div>

<div class="physical-container" class:visible="{counter === 2}">
    <ul>
        <li>Can probably still kickflip,360 flip</li>
        <li>can reach the ceiling in the kitchen while standing on the floor (heels down)</li>
        <li>can't fit inside most vehicles very comfortably</li>
    </ul>
</div>



<style>
    .visible{
        display: block !important;
    }
    :global(body){
        background:rgb(190, 190, 241);
        color: white;
        max-height:1200px;
        overflow:hidden;
    }
    svg{
        stroke:white;
    }
    .ring,.ring1{
        opacity: .2;
        position: absolute;
        top:-80px;
        left:-80px;
        padding:0;
        margin:0;
    }
    .top-circle{
        position: absolute;
        width:1200px;
        height:1200px;
        left:-300px;
        top:-700px;
        background-image: url('blueball.svg');
        z-index: -1;
    }
    .top-dashed{
        padding:0;
        margin:0;
        position: absolute;
        transform: scale(.74,.74);
        width:1960px;
        height:2000px;
        left:-610px;
        top:-1050px;
        animation-name: spinScale;
        animation-duration: 20000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        background-image: url('dashedcircle.svg');
        opacity: .1;
        z-index: -2;
    }
    .bottom-dashed{
        padding:0;
        margin:0;
        position: absolute;
        transform: scale(.7,.7);
        width:1960px;
        height:2000px;
        left:-10px;
        top:50px;
        animation-name: spinScale2;
        animation-duration: 20000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        background-image: url('dashedcircle.svg');
        opacity: .35;
        z-index: -2;
    }
    .bottom-circle{
        position: absolute;
        width:1200px;
        height:2000px;
        left:300px;
        top:300px;
        background-image: url('blueball.svg');
        z-index: -1;
    }
    .background-container{
        position: relative;
    }
    .bg-ring{
        position: absolute;
        z-index: 1;
        opacity: .5;
    }
    .ring{
        transition: all 0.3s ease-in-out;
        animation-name: spin;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .ring1{
        transition: all 0.3s ease-in-out;
        animation-name: spin-re;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    a{
        color:rgb(255, 255, 255);
        font-size:22px;
        transition:all .6s ease-in-out;
    }
    .list-eyebrow{
        position: absolute;
        top: 49.5%;
        left:16%;
        color:rgba(0, 0, 0, 0.753);
    }
    .nav-list{
        padding:10px;
        margin-top:20px;
        position: absolute;
        width:55%;
        margin-left:auto;
        margin-right:auto;
        top:13%;
        left:26.5%;

    }
    .nav-list>ul{
        list-style: none;
        padding:0;
        width:100%;
        margin:0 auto;
        display:flex;
    }
    ul:hover>li>a{
        color:rgb(244, 176, 250);
        width:100%;
    }
    .nav-list>ul>li{
        padding:15px 0;
        font-size:24px;
        width:100%;
        margin:0 auto;
        text-align:center;
        transition:all .6s ease-in-out;
    }
    
    .nav-list>ul>li:hover{
        border-radius:45px 0px 45px 0px;
        background:rgba(255, 255, 255, 0.235);
        margin:0 auto;
        box-shadow:0 0 0 0 black;
        color:rgb(70, 70, 70) !important;
        font-size:29px;
    }
    .nav-list>ul>li:nth-child(even):hover{
        border-radius:0px 45px 0px 45px;
        background:rgba(255, 255, 255, 0.235);
        margin:0 auto;
        box-shadow:0 0 0 0 black;
        color:rgb(70, 70, 70) !important;
        font-size:29px;
    }
    .nav-list>ul>li:last-child:hover{
        border-radius:0px 0px 45px 45px;
        background:rgba(255, 255, 255, 0.235);
        margin:0 auto;
        box-shadow:0 0 0 0 black;
        color:rgb(70, 70, 70) !important;
        font-size:29px;
    }
    .nav-list>ul>li:first-child:hover{
        border-radius:45px 45px 0px 0px;
        background:rgba(255, 255, 255, 0.235);
        margin:0 auto;
        box-shadow:0 0 0 0 black;
        color:rgb(70, 70, 70) !important;
        font-size:29px;
    }

    .nav-list>ul>li:hover>a{
        color:rgb(255, 228, 242);
        text-decoration: none;

    }
    .intro-container{
        border-radius:30px;
        box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.324);
        display: flex;
        flex-direction: column;
        width:90%;
        margin:60px auto;
        background:rgba(139, 129, 228, 0.845);

        padding-bottom:20px;
        opacity: 1;
        position:absolute;
        left:0;
        right:0;
        top:7%;
        bottom:0;
        height:650px;

        
    }
    @media screen and (min-width:768px){
        .intro-container{
            width:80%;
            background:rgb(139, 129, 228);
        }
    }
    .layout-container{
        position:absolute;
        top:40%;
        left:11%;
    }
    .img-wrapper{
        position: absolute;
        width:100%;
        margin:0 auto;
        left:15%;
        top:21%;
        transform:translate(0,-30px);
    }
    .button-container{
        position:absolute;
        top:57%;
        left:8.5%;

    }
    ul{
        list-style:none;
    }
    button{
        background:blue;
        border:none;
        border-radius:5px;
        margin-bottom:14px;
        color:white;
        text-transform: uppercase;
        height:60px;
        width:300px;
    }
    img{
        max-width: 100%;
        }
        .profile-img{
            border-radius:50%;
            box-shadow:0 0 12px 3px black;
        }

    h1,h2{
        text-align: center;
    }
    h1{
        font-size:30px;
        padding:0;
        margin:0;
    }
    h2{
        font-size:19px;
    }

    .technical-container{
        position:absolute;
        display: none;
        top:60%;
        left:40%;
    }
    .business-container{
        position: absolute;
        display: none;
        top:60%;
        left:40%;
    }
    .physical-container{
        position:absolute;
        display: none;
        top:60%;
        left:40%;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes spinScale {
        from {
            transform: rotate(0deg) scale(.74,.74);
        }
        to {
            transform: rotate(360deg) scale(.74,.74);
        }
    }
    @keyframes spinScale2 {
        from {
            transform: rotate(0deg) scale(.84,.84);
        }
        to {
            transform: rotate(360deg) scale(.84,.84);
        }
    }
    @keyframes spin-re {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }
</style>