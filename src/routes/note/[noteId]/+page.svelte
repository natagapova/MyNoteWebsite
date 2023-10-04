<script lang="ts">
	import { page } from '$app/stores';
	import { getFirebase } from '$lib';
	import type { NoteData } from '$lib/types';
	import Note from '../../../components/Note.svelte';
	import { get, getDatabase, ref } from 'firebase/database';

	const app = getFirebase();
	const db = getDatabase(app);

	let note: NoteData | undefined;

	const noteRef = ref(db, 'notes/' + $page.params.noteId);
	get(noteRef).then((snapshot) => {
		note = snapshot.val();
		console.log(note);
	});
</script>

<div class="sun">
	<header>
		<nav class="nav-links">
			<ul>
				<li><a href="/MainPage.html">MAIN PAGE</a></li>
				<li>
					<div class="current">NOTES</div>
				</li>
				<li><a href="/LoginPage.html">LOG IN</a></li>
			</ul>
		</nav>
	</header>

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
		height: 100vh;
	}
</style>
