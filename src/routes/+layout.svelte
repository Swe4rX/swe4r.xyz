<script>
	import "../app.pcss";
	import Navigation from "$lib/Navigation.svelte";
</script>

<Navigation></Navigation>
<div class="wrapperOut">
	<div class="wrapper">
		<slot />
	</div>
</div>

<style lang="postcss">
	.wrapperOut {
		width: 100vw;
		place-items: center;
		display: grid;
	}
	.wrapper {
		width: 60vw;
		display: grid;
		place-self: center;
	}
</style>
