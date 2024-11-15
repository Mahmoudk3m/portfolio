<script>
	import Card from '../components/projects/Card.svelte';
</script>

<div class="mt-12">
	<section id="experiences" class="flex flex-col max-w-screen-md items-start gap-6">
		<h2 class="text-4xl w-fite m-2">Experiences</h2>
		<Card
			projectTitle={'Torre'}
			projectDate={`April 2023 - January 2024`}
			projectDescription={`enhanced and maintained Torre's platform, an innovative ecosystem designed to facilitate transparent and effective job seeking and hiring processes. As a Software Engineer on this project, I played a crucial role in various aspects of the platform's development, contributing to bug resolution, performance improvements, feature enhancements, and user experience optimization.
		`}
			siteLink={'https://torre.ai/'}
		/>
	</section>
	<section id="projects" class="flex flex-col max-w-screen-md items-start gap-6 mt-12">
		<h2 class="text-4xl w-fite m-2">Projects</h2>
		<Card
			projectTitle={'We Cre8'}
			projectDate={`July 2024`}
			projectDescription={`Built a high-performance e-commerce website with a focus on intuitive design and seamless shopping experiences. Developed and optimized features like product listings, shopping cart functionality, and secure checkout to drive user engagement and conversions. Ensured responsive design and efficient site performance, enhancing usability across all devices and platforms.`}
			sourceCode={`https://wecre8.com/`}
		/>

		<Card
			projectTitle={'Shop It'}
			projectDate={`June 2024`}
			projectDescription={`Maintained and optimized payment gateway integrations, ensuring seamless and secure transaction experiences for customers. Extended the functionality of the open-source e-commerce platform Saleor, customizing features to meet specific business needs. Collaborated on overall platform stability and performance improvements, contributing to a robust and scalable e-commerce solution.`}
			sourceCode={`https://shopit.sa/en-sa`}
		/>

		<Card
			projectTitle={'Capture Peak'}
			projectDate={`May 2024`}
			projectDescription={`Architected and developed a full-stack media sharing platform, "Capture Peak," using Node.js, Express.js, React, and React Native within a one-week sprint. Enhanced media handling by implementing CRUD operations and robust file upload management, resulting in a seamless user content experience. Developed a dynamic user profile feature with settings form and image upload functionality, enhancing personalization and user engagement.`}
			sourceCode={`https://linktr.ee/mahmoudk3m`}
			siteLink={`https://capture-peak-web-frontend.vercel.app/`}
		/>
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
	</section>
</div>
