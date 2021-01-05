<script>
    import { fly } from 'svelte/transition';
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    
	let clickLeft = null;
	let xCoordOut = 0;
	let xCoordIn = 0;
	
	let images = [
	
        {
            src:'gm.jpg',
            alt: 'Levi at gm!'
        },
        {
            src:'mrm.jpg',
            alt: 'Levi at IPG/MRM!'
        }

	]
		
	let currentImageNumber = 0;
	$: currentImage = [images[currentImageNumber]]

	$:{
		if(clickLeft){
			xCoordIn = 500;
			xCoordOut = -500;
			
			if(currentImageNumber === 0){
				currentImageNumber = images.length -1;
			}
			else{
				currentImageNumber =  currentImageNumber - 1;
			}
		}
		else{
			xCoordIn = -500;
			xCoordOut = 500;
			if(currentImageNumber >= images.length - 1){
				currentImageNumber = 0;
			}
			else{
				currentImageNumber = currentImageNumber + 1;
			}
		}
		clickLeft = null;
	}

</script>

<div class="slider-container">
    <button on:click={()=>clickLeft = true}>

        <ChevronLeftIcon on:click={()=>clickLeft = true}/>
    </button>
	<div class="image-container">
		{#each currentImage as image(image)}
		<img in:fly="{(()=>({x:xCoordIn,duration: 1000, opacity:1}))()}" out:fly="{(()=>({x:xCoordOut,duration: 1000, opacity:1}))()}" src="{image.src}" alt="{images.alt}">
	{/each}
    </div>
    <button on:click={()=>clickLeft = false}>
        <ChevronRightIcon />
    </button>
</div>

<style lang="scss">
	.slider-container{
		display:flex;
		justify-content:center;
        width:100%;
        button{
            opacity: .5;
            width:15%;
            background:none;
            border:none;
            color:white;
            transition: all .6s ease-in-out;

            &:hover{
                color:red;
                transition: all .6s ease-in-out;
                opacity:.75;
            }
            &:focus{
                outline:none;
            }
        }
	}
	.image-container{
		overflow:hidden;
		width:100%;
        height:750px;
		position:relative;
		
	}
	img{
		max-width:100%;
        height:100%;
		position:absolute;
	}
</style>