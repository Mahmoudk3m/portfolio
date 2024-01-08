<script>
	import NotesSvg2 from '../../Svgs/notes/notesSvg2.svelte';
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
		}, 6000);
	});
</script>

{#if isVisible}
	<div
		class="svgContainer"
		in:fly={{ y: 120, duration: 5000 }}
		out:fade={{ duration: 500 }}
		on:introend={toggleVisibility}
	>
		<NotesSvg2 className="absolute top-40 left-[30rem]" />
	</div>
{/if}

<style>
	.svgContainer {
		position: relative;
	}
</style>
