<script>
	import NotesSvg3 from '../../Svgs/notes/notesSvg3.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isVisible = false;

	const toggleVisibility = () => {
		isVisible = !isVisible;
		if (!isVisible) {
			setTimeout(() => {
				isVisible = true;
			}, 15000);
		}
	};

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, 11000);
	});
</script>

{#if isVisible}
	<div
		class="absolute right-[25.5rem] bottom-[30rem]"
		in:fly={{ y: 120, duration: 5000 }}
		out:fade={{ duration: 500 }}
		on:introend={toggleVisibility}
	>
		<NotesSvg3 />
	</div>
{/if}
