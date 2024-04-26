<script>
	import Card from '../components/projects/Card.svelte';
</script>

<section id="projects" class="flex flex-col max-w-screen-md items-start gap-6 mt-12">
	<h1 class="text-4xl w-fit m-2">Since you asked... Here's my past...</h1>
	<Card
		projectTitle={'E-commerce Platform'}
		projectDate={`April 2024`}
		projectDescription={`Developed a fully functional e-commerce platform using Nextjs. This project showcases my proficiency in various Nextjs features and best practices.`}
		sourceCode={`https://github.com/Mahmoudk3m/e-commerce`}
		siteLink={`https://e-commerce-cyan-three.vercel.app/`}
	/>
	<Card
		projectTitle={'Nextjs Dashboard'}
		projectDate={`April 2024`}
		projectDescription={`Developed a comprehensive Full-Stack Financial Dashboard Application using the advanced features of Next.js. This project showcases a multi-faceted platform designed to manage financial data with user authentication and dynamic data interaction.
		`}
		sourceCode={`https://github.com/Mahmoudk3m/nextjs-dashboard`}
		siteLink={'https://nextjs-dashboard-topaz-zeta-34.vercel.app/'}
	/>
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
