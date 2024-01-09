<div class="card">
	<p>If you ever get lost again ...</p>
	<p>You can find me here ...</p>
</div>

<style>
	p {
		font-size: 24px;
	}
	.card {
		display: flex;
		justify-content: center;
		gap: 8px;

		@media screen and (max-width: 767px) {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
