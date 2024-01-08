<script>
	import StarSvg3 from '../../Svgs/stars/StarSvg3.svelte';
</script>

<div class="blinking absolute left-72 top-96"><StarSvg3 /></div>

<style>
	@keyframes blink3 {
		0%,
		100% {
			opacity: 1;
		}
		33.33% {
			opacity: 0;
		}
		66.66% {
			opacity: 0;
		}
	}

	.blinking {
		animation: blink3 5s infinite;
	}
</style>
