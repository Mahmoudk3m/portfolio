<script>
	export let projectTitle = 'My Project';
	export let projectDate = '31st Oct - 1st Nov 2020';
	export let projectDescription =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis ullam quae excepturi officia molestias facere ipsam sit impedit illum aperiam odio delectus voluptatem, accusamus aliquam provident laudantium odit eos beatae asperiores maxime explicabo at illo veniam. Omnis error quo nam quis asperiores! Possimus ipsum exercitationem vel nemo, quos excepturi!';
	export let sourceCode;
	export let appLink;
	export let siteLink;
</script>

<div class="card">
	<div class="card__content">
		<div class="card__content__title flex justify-center bg-steel-blue">
			<p class="">k3m@dev: ~</p>
		</div>

		<div class="flex flex-col card__content__body p-3 bg-steel-blue-50 gap-4">
			<div class="flex justify-between items-center mb-2">
				<h1 class="text-2xl md:text-4xl">{projectTitle}</h1>
				<h2 class="text-xl md:text-2xl">{projectDate}</h2>
			</div>
			<p class="text-xl md:text-2xl">
				{projectDescription}
			</p>
			<div class="flex flex-row justify-between">
				{#if sourceCode}
					<a class="text-lg md:text-xl" target="_blank" href={sourceCode}>View Source Code!</a>
				{/if}
				{#if appLink}
					<a class="text-lg md:text-xl" target="_blank" href={appLink}>Download The App!</a>
				{/if}
				{#if siteLink}
					<a class="text-lg md:text-xl" target="_blank" href={siteLink}>Visit The Website!</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-wrap: nowrap;
		&__content {
			&__title {
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
			}

			&__body {
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}
		}

		a::before {
			content: '🔗';
			margin-right: 0.5rem;
		}

		a:hover {
			transform: scale(1.1);
		}
	}
</style>
