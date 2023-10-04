<script lang="ts">
	import { getFirebase } from "$lib";
	import type { NoteData } from "$lib/types";
  import Note from "../../components/Note.svelte";
  import { getDatabase, onValue, ref } from "firebase/database";
	import NoteCreation from "../../components/NoteCreation.svelte";

  const app = getFirebase();
  const db = getDatabase(app);

  let notes: Record<string, NoteData> = {};

  const notesRef = ref(db, "notes");
  onValue(notesRef, snapshot => {
      notes = snapshot.val();
  });
</script>

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
  <hr>

  <div class="cols">
    <div class="left-col cols-item border-right">
      <NoteCreation/>
        <img class="cat" src="src/images/cat.jpg" alt="A cat">
        <p class="catText">Here is a cat image in case you are sad today</p>
    </div>

    <div class="right-col cols-item">
        {#each Object.entries(notes) as note}
          <Note id={note[0]} data={note[1]}/>
        {/each}
    </div>
  </div>

  <style>
.cat{
  width: 70%;
  border-radius: 20px;
  margin-top: 20px;
}
.catText {
  font-size: 14px;
  color: rgb(137, 137, 137);
  margin-left: 10px;
}
.border-right {
  border-right: 1px solid rgb(227, 227, 227);
  margin-left: 0;
}
.cols {
  display: flex;
  flex-direction: row;
}
.left-col {
  flex: 30%;
  margin-top: 20px;
}
.right-col {
  flex: 70%;
  margin-top: 20px;
}
  </style>