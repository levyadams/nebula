
<div class="content-container">
    <svg
     on:click={()=>colorChange()}
     id="theme-svg" style="fill:{color1};transition:fill 2.5s ease-in-out;" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083 1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.482 0-4.996 1.626-4.996 4.734 0 1.67.861 3.168 1.774 4.753.972 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.752.341h-1.094c-.287 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-3.629-16.347l-1.188-.153c.259-1.995 1.5-3.473 3.518-3.847l.219 1.177c-1.947.361-2.433 1.924-2.549 2.823z"/>
    </svg>
</div>

<style>
     svg{
        cursor: pointer;
        position: absolute;
        top: -46px;
        left: 317px;
        transform: rotate(180deg);
    }
    .content-container{
        position: relative;
    }
</style>
<script>

let colors = [
        {
            name:'desert',
            color0:'#264653',
            color1:'#e9c46a',
            color2:'#2a9d8f',
            color3:'black',
            color4:'black',


        },
        {
            name:'icecream',
            color0:'#bde0fe',
            color1:'#974e69',
            color2:'#974e69',
            color3:'#cdb4db',
            color4:'#cdb4db',
        },
        {
            name:'lightDark',
            color0:'#f8f9fa',
            color1:'#343a40',
            color2:'#ced4da',
            color3:'#6c757d',
            color4:'#e2cdfd'

        },
        {
            name:'radical',
            color0:'#5f0f40',
            color1:'#fb8b24',
            color2:'#e36414',
            color3:'#9a031e',
            color4:'#0f4c5c'

        }
    ];

        export let currentTheme = colors[3].name;
        export let color0 = colors[3].color0;
        export let color1 = colors[3].color1;
        export let color2 = colors[3].color2;
        export let color3 = colors[3].color3;
        export let color4 = colors[3].color4;
   
    let colorChange =()=>{
        for(let x = 0;x<=colors.length-1;x++){
            if(color0 === colors[x].color0){
                if(x === colors.length-1){
                    color0 = colors[0].color0;
                    color1 = colors[0].color1;
                    color2 = colors[0].color2;
                    color3 = colors[0].color3;
                    color4 = colors[0].color4;
                    currentTheme = colors[0].name;
                    return;

                }
                else{
                    color0 = colors[x+1].color0;
                    color1 = colors[x+1].color1;
                    color2 = colors[x+1].color2;
                    color3 = colors[x+1].color3;
                    color4 = colors[x+1].color4;
                    currentTheme = colors[x+1].name;
                    return;
                }
            }
        }
    };
    
</script>