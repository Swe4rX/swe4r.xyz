<div class="title">
	<slot />
</div>

<style lang="postcss">
	.title {
		font-size: clamp(4rem, 4vw, 3000px);
		font-weight: 550;
		letter-spacing: -.03em;
		color: hsl(var(--secondary));
	}
</style>