<script>
	import StarSvg4 from '../../Svgs/stars/StarSvg4.svelte';
</script>

<div class="blinking absolute right-96 top-96"><StarSvg4 /></div>

<style>
	@keyframes blink4 {
		0%,
		100% {
			opacity: 1;
		}
		20% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		60% {
			opacity: 0;
		}
		80% {
			opacity: 0;
		}
	}

	.blinking {
		animation: blink4 5s infinite;
	}
</style>
