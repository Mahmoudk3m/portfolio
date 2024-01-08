<script>
	import Notes from '../Animated/Notes/Notes.svelte';
	import Stars from '../Animated/Stars/Stars.svelte';
	import Cli from '../Homepage/Cli.svelte';
</script>

<section class="flex flex-col items-center h-screen">
	<img src="/background.png" alt="background" class="absolute -z-10 object-cover w-full h-screen" />
	<Cli
		title={"Hey, I'm Mahmoud"}
		mainText={'A software engineer passionate about creativty, problem-solving and tackling new challenges'}
	/>
	<Stars />
	<Notes />
</section>
