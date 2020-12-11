<script>
	import IntersectionObserver from '../../components/IntersectionObserver.svelte';

</script>
<style>
	.somesection {
		width:100%;
		height:100vh;
		display: flex;
  align-items: center;
  justify-content: center;
	}
	
	.somesection.even{
		background:#ccc;
	}
	
	.content{
	text-align:center;
		width:350px;
	}
</style>

<IntersectionObserver let:intersecting top={300}>
	{#if intersecting}<div style="">INTERSECTING!</div>{/if}
	{#if !intersecting}<div>NOT!</div>{/if}
{#if intersecting}
      <section class="somesection">
				<div class="content">
					<h3>
						This message will show if it is intersecting.
					</h3>
					<p>
						Obviously you won't see it if it isn't, so better open up the console to see the changes.
					</p>
				</div>
      </section>
    {:else}
      <section class="somesection">
        This message will show if the section isn't intersecting. Hello from the console! 👀
      </section>
    {/if}
</IntersectionObserver>
<IntersectionObserver let:intersecting top={-600}>
{#if intersecting}
      <section class="somesection even">
				<div class="content">
					<h3>
						This message will show if it is intersecting.
					</h3>
					<p>
						Obviously you won't see it if it isn't, so better open up the console to see the changes.
					</p>
				</div>
      </section>
    {:else}
      <section class="somesection">
        This message will show if the section isn't intersecting. Hello from the console! 👀
      </section>
    {/if}
</IntersectionObserver>
<IntersectionObserver let:intersecting top={400}>
{#if intersecting}
      <section class="somesection">
				<div class="content">
					<h3>
						This message will show if it is intersecting.
					</h3>
					<p>
						Obviously you won't see it if it isn't, so better open up the console to see the changes.
					</p>
				</div>
      </section>
    {:else}
      <section class="somesection">
        This message will show if the section isn't intersecting. Hello from the console! 👀
      </section>
    {/if}
</IntersectionObserver>
<IntersectionObserver let:intersecting top={400}>
{#if intersecting}
      <section class="somesection even">
				<div class="content">
					<h3>
						This message will show if it is intersecting.
					</h3>
					<p>
						Obviously you won't see it if it isn't, so better open up the console to see the changes.
					</p>
				</div>
      </section>
    {:else}
      <section class="somesection">
        This message will show if the section isn't intersecting. Hello from the console! 👀
      </section>
    {/if}
</IntersectionObserver>