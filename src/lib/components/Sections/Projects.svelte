<script>
	import Card from '../Projects/Card.svelte';
</script>

<section class="flex flex-col items-center self-center m-2">
	<h1 class="text-4xl w-fit m-1">Until we arrive... Since you asked... Here's my past...</h1>
	<div class="flex flex-col items-center mt-4 max-w-3xl" style="gap:16px;">
		<Card
			projectDate="1st Sept - 2nd Dec 2020"
			projectTitle="title"
			projectDescription="Description "
		/>
		<Card />
		<Card />
	</div>
</section>

<style>
</style>
