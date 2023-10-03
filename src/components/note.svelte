<script lang="ts">
	import type { NoteData } from "$lib/types";
  
  export let id: string;
  export let data: NoteData;
</script>

<div class="noteWindow"><a href={`/note/${id}`} class="postAsLink">
    <h3>Username</h3>
    <p class="postTime">{data.time}</p>
    <p class="post">{data.text}</p>
</a></div>

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
</style>