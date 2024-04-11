<script>
	import Typewriter from 'svelte-typewriter';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	let disableTypeWriter = true;

	//only enable typewrite when it's in view
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					disableTypeWriter = false;
				} else {
					disableTypeWriter = true;
				}
			});
		});

		observer.observe(document.querySelector('#contact'));
	});
</script>

<div
	class="transform flex items-center justify-center rounded-2xl border-2 border-white h-2/3 w-full sm:h-2/3 sm:w-1/2 bg-dark-blue"
>
	<div class="trapezoid absolute w-32 top-0" />
	<div class="absolute w-6 h-2 bg-white left-14 top-5 rounded-full" />
	<div class="absolute w-6 h-2 bg-white left-6 top-5 rounded-full" />
	<div
		class="p-4 flex flex-col justify-between items-center b-top rounded-xl h-[95%] w-[95%] bg-steel-blue"
	>
		<h1 class="text-5xl mt-2">Contact Me</h1>
		<Typewriter keepCursorOnFinish interval="150" disabled={disableTypeWriter}>
			<p class="text-2xl text-center">If you ever get lost again ... You can find me here ...</p>
		</Typewriter>
		<div class="flex flex-col w-full gap-4">
			<Button text={'Linkedin'} href={'https://www.linkedin.com/in/mahmoudk3m/'} />
			<Button text={'Github'} href={'https://github.com/Mahmoudk3m'} />
			<Button text={'Email'} href={'mailto:mahmoudk3m.mk@gmail.com'} />
			<Button text={'Download Resume'} href={'/resume.pdf'} />
		</div>
	</div>
</div>

<style>
	.trapezoid {
		border-bottom: 30px solid #04263f;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		border-radius: 12px;
		transform: rotate(180deg);
	}
</style>
