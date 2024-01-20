<script>
	let selectedItem = '';

	function handleMouseOver(item) {
		selectedItem = item;
	}
</script>

<div class="flex justify-center w-full">
	<ul class="selector">
		<li
			on:mouseover={() => {
				handleMouseOver('github');
			}}
			on:focus={() => {
				handleMouseOver('github');
			}}
			class:link={selectedItem === 'github'}
		>
			<span class="arrow">{`<`}</span>
			<a target="_blank" href="https://github.com/Mahmoudk3m">Github</a>
			<span class="arrow">{`>`}</span>
		</li>
		<li
			on:mouseover={() => {
				handleMouseOver('linkedin');
			}}
			on:focus={() => {
				handleMouseOver('linkedin');
			}}
			class:link={selectedItem === 'linkedin'}
		>
			<span class="arrow">{`<`}</span>
			<a target="_blank" href="https://www.linkedin.com/in/mahmoudk3m">Linkedin</a>
			<span class="arrow">{`>`}</span>
		</li>
		<li
			on:mouseover={() => {
				handleMouseOver('mail');
			}}
			on:focus={() => {
				handleMouseOver('mail');
			}}
			class:link={selectedItem === 'mail'}
		>
			<span class="arrow">{`<`}</span>
			<a target="_blank" href="mahmoudk3m.mk@gmail.com">Email</a>
			<span class="arrow">{`>`}</span>
		</li>
		<li
			on:mouseover={() => {
				handleMouseOver('resume');
			}}
			on:focus={() => {
				handleMouseOver('resume');
			}}
			class:link={selectedItem === 'resume'}
		>
			<span class="arrow">{`<`}</span>
			<a target="_blank" href="/Resume.pdf">Resume</a>
			<span class="arrow">{`>`}</span>
		</li>
	</ul>
</div>

<style lang="scss">
	a {
		font-size: 32px;
		line-height: 1;
	}
	span {
		font-size: 48px;
		line-height: 1;
	}
	li {
		display: flex;
		justify-content: center;

		align-items: center;
	}
	ul {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.arrow {
		visibility: hidden;
		color: white;
	}

	.link:hover a {
		color: #fff;
	}
	.link:hover .arrow {
		visibility: visible;
	}

	.selector {
		display: flex;
		@media (max-width: 568px) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-gap: 1rem;
		}
	}
</style>
