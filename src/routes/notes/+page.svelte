<script lang="ts">
	import { getFirebase } from '$lib';
	import type { NoteData } from '$lib/types';
	import Note from '../../components/note.svelte';
	import { getDatabase, onValue, ref } from 'firebase/database';
	import NoteCreation from '../../components/NoteCreation.svelte';

	const app = getFirebase();
	const db = getDatabase(app);

	let notes: Record<string, NoteData> = {};

	const notesRef = ref(db, 'notes');
	onValue(notesRef, (snapshot) => {
		notes = snapshot.val();
	});
</script>

<svelte:head>
	<title>My notes</title>
	<meta name="description" content="Here you can find all your notes" />
</svelte:head>

<hr />

<div class="cols">
	<div class="left-col cols-item">
		<NoteCreation />
	</div>

	<div class="right-col cols-item">
		{#each Object.entries(notes) as note}
			<Note id={note[0]} data={note[1]} />
		{/each}
	</div>
</div>

<style>
	.cols {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.left-col {
		flex: 30%;
		margin-top: 20px;
		margin-bottom: 50px;
	}
	.right-col {
		flex: 70%;
		margin-top: 20px;
	}
</style>
