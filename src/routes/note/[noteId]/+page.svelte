<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getFirebase } from '$lib';
	import type { NoteData } from '$lib/types';
	import Note from '../../../components/Note.svelte';
	import { get, getDatabase, ref, remove } from 'firebase/database';

	const app = getFirebase();
	const db = getDatabase(app);

	let note: NoteData | undefined;

	const noteRef = ref(db, 'notes/' + $page.params.noteId);
	get(noteRef).then((snapshot) => {
		note = snapshot.val();
		console.log(note);
	});
</script>

<svelte:head>
	{#if note}
		<title>{note.text}</title>
		<meta name="description" content={`This is your note from ${note.time}: ${note.text}`} />
	{/if}
</svelte:head>

<div class="sun">
	{#if note}
		<Note data={note} />
	{/if}

	<button
		class="deleteButton"
		on:click={() => {
			remove(noteRef).then(() => goto('/notes'));
		}}>Delete note</button
	>
</div>

<style>
	.sun {
		background-image: url(../../../images/sun.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		height: 100vh;
	}
	.deleteButton {
		border-radius: 10px;
		font-size: 14px;
		color: rgb(137, 137, 137);
		background-color: rgb(247, 247, 247);
		margin: 7px 5px 2px 5px;
	}
</style>
