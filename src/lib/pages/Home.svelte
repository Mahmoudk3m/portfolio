<script>
	import Cli from '../components/home/Cli.svelte';
	import Background from '../components/home/Background.svelte';
</script>

<section class="h-screen flex flex-row items-start">
	<Cli
		title={"Hey, I'm Mahmoud"}
		mainText={'A software engineer passionate about creativity, problem-solving, and tackling new challenges'}
	/>
	<div class="scene">
		<Background/>
	</div>
</section>