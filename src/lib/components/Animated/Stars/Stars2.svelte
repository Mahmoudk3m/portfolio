<script>
	import StarSvg2 from '../../Svgs/stars/StarSvg2.svelte';
</script>

<div class="blinking absolute left-52 top-72"><StarSvg2 /></div>

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

	.blinking {
		animation: blink2 6s infinite;
	}
</style>
