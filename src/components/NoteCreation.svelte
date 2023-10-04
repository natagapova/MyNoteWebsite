<script lang="ts">
	import { getFirebase } from '$lib';
	import type { NoteData } from '$lib/types';
	import { getDatabase, push, ref, set } from 'firebase/database';

	let text = '';
	let mood = true;
	let habits: string[] = [];

	const app = getFirebase();
	const db = getDatabase(app);
	const notesRef = ref(db, 'notes');

	function createNote() {
		if (text.length == 0) {
			alert('Please, enter some text before posting');
			return;
		}

		const noteData: NoteData = {
			text: text,
			mood: mood,
			time: new Date().toString()
		};

		if (habits.length > 0) noteData.status = habits.join(', ');

		const newNoteRef = push(notesRef);
		set(newNoteRef, noteData).then(() => {
			text = '';
			mood = true;
		});
	}
</script>

<div class="noteCreation">
	<textarea
		required
		class="inputWindow"
		placeholder="Share your thoughts here..."
		bind:value={text}
	/><br />

	<div class="habitsDiv">
		<p class="questions">In the last 3 hours, I...</p>
		<div class="habits">
			{#each ['drank water', 'had a meal', 'gave myself a rest'] as habit}
				<label>
					<input type="checkbox" name="habits" value={habit} bind:group={habits} />

					{habit}
				</label>
			{/each}
		</div>
	</div>

	<div class="moodSwitch">
		<p class="questions">How is your mood today?</p>

		<div class="rateYourMood">
			<p class="aboutMood">Bad...</p>
			<label class="switch">
				<input type="checkbox" bind:checked={mood} />
				<span class="slider round" />
			</label>
			<p class="aboutMood">Good!</p>
		</div>

		<button class="postButton" on:click={() => createNote()}>Post</button>
	</div>
</div>

<style>
	.inputWindow {
		margin-top: 0px;
		background-color: rgb(242, 242, 242);
		padding: 15px 20px 10px 20px;
		font-size: 18px;
		border-radius: 20px;
		border: 2px;
		width: 85%;
		height: 200px;
		resize: none;
	}
	.moodSwitch {
		margin-top: 0px;
		background-color: rgb(242, 242, 242);
		padding: 15px 20px 10px 20px;
		font-size: 16px;
		border-radius: 20px;
		border: 2px;
		width: 85%;
		height: 47px;
		resize: none;
	}
	.aboutMood {
		font-size: 15px;
		color: rgb(137, 137, 137);
		margin-top: 7px;
	}
	.questions {
		font-size: 15px;
	}
	.habits {
		font-size: 15px;
		display: flex;
		flex-direction: column;
	}
	.habitsDiv {
		background-color: rgb(242, 242, 242);
		padding: 15px 20px 10px 20px;
		border-radius: 10px;
		width: 85%;
		margin: 0 0 10px 0;
	}
	.rateYourMood {
		display: flex;
		flex-direction: row;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 24px;
		margin: 15px;
		margin-top: 2px;
	}
	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	.slider:before {
		position: absolute;
		content: '';
		height: 16px;
		width: 16px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	input:checked + .slider {
		background-color: #b0c7dd;
	}
	input:focus + .slider {
		box-shadow: 0 0 1px #b0c7dd;
	}
	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}
	.slider.round:before {
		border-radius: 50%;
	}

	.postButton {
		margin-top: 15px;
		margin-left: auto;
		margin-right: 25px;
		list-style: none;
		display: block;
		background: #b0c7dd;
		border-radius: 10px;
		box-sizing: border-box;
		cursor: pointer;
		padding: 10px 15px 5px 15px;
		border: 0;
		transition: 0.3s;
		font-size: 16px;
		height: 35px;
		width: 85%;
	}
	.postButton:hover {
		background-color: black;
		color: #b0c7dd;
	}
</style>
