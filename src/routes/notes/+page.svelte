<script>
  import Note from "../../components/note.svelte";
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
        <textarea class="inputWindow" placeholder="Share your thoughts here..."></textarea><br>
        <button class="postButton">Post</button>
        <img class="cat" src="src/images/cat.jpg" alt="A cat">
        <p class="catText">Here is a cat image in case you are sad today. Cheer up!</p>
    </div>

    <div class="right-col cols-item">
        <Note/>
        <Note/>
        <Note/>
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
.postButton {
  margin-top: 5px;
  margin-left: auto;
  margin-right: 20px;
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
}
.postButton a {
  color: white;
  text-decoration: none;
}
.postButton:hover {
  background-color: black;
  color: #b0c7dd;
}
.cat{
  width: 90%;
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