<script lang="ts">
	import type { NoteData } from '$lib/types';

	export let id: string | undefined = undefined;
	export let data: NoteData;
</script>

<div class="noteWindow">
	<a href={id ? `/note/${id}` : '/notes'} class="postAsLink">
		<p class="postTime">{data.time}</p>
		<p class="post">{data.text}</p>
		<hr class="postBreak" />

		<div class="window">
			{#if data.status}
				<p class="habitsText">In the last three hours, I...</p>
				<p class="habitsStatus">{data.status}</p>
			{/if}
		</div>

		<div class="window">
			<p class="habitsText">My mood for today:</p>
			{#if data.mood == true}
				<p class="habitsStatus">Good!</p>
			{:else}
				<p class="habitsStatus">Bad...</p>
			{/if}
		</div>
	</a>
</div>

<style>
	.noteWindow {
		background-color: rgb(242, 242, 242);
		margin-left: 20px;
		margin-bottom: 15px;
		padding: 20px 30px 20px 30px;
		border-radius: 15px;
		text-decoration: none;
		color: black;
		transition: 0.3s;
		width: 40%;
	}
	.noteWindow:hover {
		background-color: rgb(234, 234, 234);
		transition: 0.3s;
	}
	.postAsLink {
		text-decoration: none;
		color: black;
	}
	.postTime {
		font-size: 13px;
		color: #7c7d80;
		margin: -4px 0px 5px 0px;
	}
	.post {
		font-size: 18px;
	}
	.postBreak {
		border-color: rgb(240, 240, 240);
		border-width: 1px;
		margin: 10px 0 10px 0;
		width: 10%;
	}
	.habitsText {
		font-size: 15px;
		color: #7c7d80;
		margin-right: 5px;
	}
	.habitsStatus {
		font-size: 15px;
	}
	.window {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
