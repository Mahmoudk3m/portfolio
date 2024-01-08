<script>
	import { onMount } from 'svelte';
	import Notes from '../Animated/Notes/Notes.svelte';
	import Stars from '../Animated/Stars/Stars.svelte';
	import Cli from '../Homepage/Cli.svelte';

	let screenWidth = 0;
	let disableAnimations = false;

	onMount(() => {
		screenWidth = window.innerWidth;
		disableAnimations = screenWidth < 1440;

		window.addEventListener('resize', () => {
			screenWidth = window.innerWidth;
			disableAnimations = screenWidth < 1440;
		});
	});
</script>

<section class="flex flex-col items-center h-screen">
	<Cli
		title={"Hey, I'm Mahmoud"}
		mainText={'A software engineer passionate about creativity, problem-solving, and tackling new challenges'}
	/>
	<img
		src="/background.png"
		alt="background"
		class="absolute -z-10 object-cover object-left w-full h-screen"
	/>

	<Stars />
	{#if !disableAnimations}
		<Notes />
	{/if}
</section>

<!-- Atest -->
