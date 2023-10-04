<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getFirebase } from '$lib';
	import type { NoteData } from '$lib/types';
	import Note from '../../../components/note.svelte';
	import { get, getDatabase, ref, remove } from 'firebase/database';

	const app = getFirebase();
	const db = getDatabase(app);

	let note: NoteData | undefined;

	const noteRef = ref(db, 'notes/' + $page.params.noteId);
	get(noteRef).then((snapshot) => {
		note = snapshot.val();
	});
</script>

<svelte:head>
	{#if note}
		<title>{note.text}</title>
		<meta name="description" content={`This is your note from ${note.time}: ${note.text}`} />
	{/if}
</svelte:head>

<div class="sun">
	<button
		class="deleteButton"
		on:click={() => {
			remove(noteRef).then(() => goto('/notes'));
		}}>Delete note</button
	>

	{#if note}
		<Note data={note} />
	{/if}
</div>

<style>
	.sun {
		background-image: url(../../../images/sun.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		height: calc(100vh - 77px - 20px);

		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.deleteButton {
		border-radius: 10px;
		font-size: 14px;
		color: rgb(137, 137, 137);
		background-color: rgb(247, 247, 247);
		padding: 7px 5px 2px 5px;
		align-self: right;
		transition: 0.3s;
		margin: 20px;

		position: absolute;
		left: 8px;
		top: 8px;
	}
	.deleteButton:hover {
		background-color: black;
		color: rgb(247, 247, 247);
		transition: 0.3s;
	}
</style>
