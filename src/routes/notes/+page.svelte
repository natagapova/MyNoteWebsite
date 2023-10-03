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
        <div class="noteWindow"><a href="/SingleNotePage.html" class="postAsLink">
            <h3>Username</h3>
            <p class="postTime">3 hours ago</p>
            <p class="post">Stupid thoughts of some boring ass person that doesn't have a life so they use this motherfucking website for literally no good reason</p>
            <button class="likebutton">Like</button>
        </a>
        </div>
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
.noteWindow {
  background-color: rgb(242, 242, 242);
  margin-left: 20px;
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
.likebutton {
  padding: 8px 10px 4px 10px;
  margin-left: auto;
  margin-top: -15px;
  font-size: 14px;
  border-radius: 999px;
  list-style: none;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s;
  border: 0;
  background-color: #000000;
  color: white;
}
.likebutton a {
  color: white;
  text-decoration: none;
}
.likebutton:hover {
  background-color: #b0c7dd;
  transition: 0.3s;
  color: black;
}
  </style>