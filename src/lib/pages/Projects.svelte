<script>
	import Card from '../components/projects/Card.svelte';
</script>

<section id="projects" class="flex flex-col max-w-screen-md items-start gap-6">
	<h1 class="text-4xl w-fit m-2">Since you asked... Here's my past...</h1>
	<Card
		projectTitle={'Conduit'}
		projectDate={`March 2024`}
		projectDescription={`Conduit is a full-fledged social blogging platform built with React and Zustand, mirroring the functionality of popular platforms like Medium.com. This project showcases my proficiency in various React skills and best practices`}
		sourceCode={'https://github.com/Mahmoudk3m/conduit'}
		siteLink={'https://conduit-nu.vercel.app/'}
	/>
	<Card
		projectTitle={'Torre'}
		projectDate={`April 2023 - January 2024`}
		projectDescription={`enhanced and maintained Torre's platform, an innovative ecosystem designed to facilitate transparent and effective job seeking and hiring processes. As a Software Engineer on this project, I played a crucial role in various aspects of the platform's development, contributing to bug resolution, performance improvements, feature enhancements, and user experience optimization.
    `}
		siteLink={'https://torre.ai/'}
	/>
</section>
