<script>
	export let text;
	export let href = '#';
</script>

<a {href} target="_blank">
	<button
		class="rounded-full w-full bg-white hover:bg-gray-200 p-2 text-dark-blue hover:text-maple hover:scale-105"
	>
		<p class="text-4xl">{text}</p>
	</button>
</a>
