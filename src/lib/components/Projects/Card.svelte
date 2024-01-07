<script>
	export let projectTitle = 'My Project';
	export let projectDate = '31st Oct - 1st Nov 2020';
	export let projectDescription =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis ullam quae excepturi officia molestias facere ipsam sit impedit illum aperiam odio delectus voluptatem, accusamus aliquam provident laudantium odit eos beatae asperiores maxime explicabo at illo veniam. Omnis error quo nam quis asperiores! Possimus ipsum exercitationem vel nemo, quos excepturi!';
</script>

<div class="card">
	<div class="card__content">
		<div class="card__content__title flex justify-center bg-steel-blue">
			<p class="">k3m@dev: ~</p>
		</div>

		<div class="card__content__body p-3 bg-steel-blue-50">
			<div class="flex justify-between">
				<h1 class="text-4xl">{projectTitle}</h1>
				<h2 class="text-2xl">{projectDate}</h2>
			</div>
			<p>
				{projectDescription}
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-wrap: nowrap;
		&__content {
			min-width: 768px;

			&__title {
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
			}

			&__body {
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}
		}
	}
</style>
