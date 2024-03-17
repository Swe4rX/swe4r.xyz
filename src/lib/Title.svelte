<div class="title">
	<slot />
</div>

<style lang="postcss">
	.title {
		background: -webkit-linear-gradient(0deg, #FC466B 0%, #3F5EFB 100%) center;
		font-size: clamp(4rem, 4vw, 3000px);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 800;
		width: fit-content;
		letter-spacing: -0.5vw;
	}
</style>