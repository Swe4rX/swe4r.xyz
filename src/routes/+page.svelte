<script>
	import Title from "$lib/Title.svelte";
</script>

<Title>
	<span class="letter">S</span>
	<span class="letter">w</span>
	<span class="letter">e</span>
	<span class="letter">4</span>
	<span class="letter">r</span>
	<span class="letter">.</span>
	<span class="letter">X</span>
	<span class="letter">Y</span>
	<span class="letter z">Z</span>
</Title>
<h3>Website in Dev</h3>
<style>
	.letter {
		top: 0;
		transition: top 0.3s ease-in-out;
	}
	.letter:hover {
		position: relative;
		top: -10px;
		-webkit-background-clip: unset;
		background-clip: unset;
		-webkit-text-fill-color: #3F5EFB;
	}
	.z {
		margin-right: 5px;
	}
</style>

