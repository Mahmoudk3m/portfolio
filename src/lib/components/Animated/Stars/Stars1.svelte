<script>
	import StarSvg1 from '../../Svgs/stars/StarSvg1.svelte';
</script>

<div class="blinking absolute left-44 top-72"><StarSvg1 /></div>

<style>
	@keyframes blink1 {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.blinking {
		animation: blink1 5s infinite;
	}
</style>
