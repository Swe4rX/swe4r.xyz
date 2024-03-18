<div class="title">
	<slot />
</div>

<style lang="postcss">
	.title {
		font-size: clamp(4rem, 4vw, 3000px);
		font-weight: 550;
		letter-spacing: -.03em;
		color: hsl(var(--secondary));
		text-shadow: 1px 1px hsl(var(--background)), -1px -1px #444;
	}
</style>