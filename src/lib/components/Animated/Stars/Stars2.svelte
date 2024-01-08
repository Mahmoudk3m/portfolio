<script>
	import StarSvg2 from '../../Svgs/stars/StarSvg2.svelte';
</script>

<div class="blinking2 absolute right-56 top-72"><StarSvg2 /></div>

<style>
	@keyframes blink2 {
		0%,
		100% {
			opacity: 1;
		}
		25% {
			opacity: 0;
		}
		75% {
			opacity: 0;
		}
	}

	.blinking2 {
		animation: blink2 6s infinite;
	}
</style>
