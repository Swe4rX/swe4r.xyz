<div class="title">
	<slot />
</div>

<style lang="postcss">
	.title {
		margin-top: 5vw;
		background: -webkit-linear-gradient(0deg, #FC466B 0%, #3b9ff1 100%) center;
		font-size: clamp(4rem, 4vw, 3000px);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 600;
		width: fit-content;
		letter-spacing: -.03em;
	}
</style>