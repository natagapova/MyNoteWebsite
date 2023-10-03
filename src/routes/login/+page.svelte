<header>
    <nav class="nav-links">
        <ul>
            <li><a href="/MainPage.html">MAIN PAGE</a></li>
            <li><a href="/NotesPage.html">NOTES</a></li>
            <li>
                <div class="current">LOG IN</div>
            </li>
        </ul>
    </nav>
</header>
<hr>

<div class="loginwindow">
    <h1 class="loginMainText">Start your journey today!</h1>
    <input class="inputLine" type="name" placeholder="Enter your name"><br>
    <input class="inputLine" type="password" placeholder="Enter your password"><br>
    <p class="privacyPolicy">*By singing up you accept the fact that Front-end is the best course in Innopolis University</p>
    <button class="loginButton">Log in</button>
</div>

<style>
    .loginwindow {
  margin: 30px;
  align-items: center;
  align-self: center;
  align-content: center;
  text-align: center;
}
.loginMainText {
  font-size: 40px;
}
.inputLine {
  margin-top: 10px;
  background-color: rgb(242, 242, 242);
  padding: 15px 20px 10px 20px;
  font-size: 18px;
  border-radius: 100px;
  border: none;
  width: 40%;
}
.loginButton {
  margin-top: 10px;
  align-items: center;
  list-style: none;
  display: inline-block;
  background: #b0c7dd;
  border-radius: 999px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 15px 30px 10px 30px;
  border: 0;
  transition: 0.3s;
}
.loginButton a {
  color: white;
  text-decoration: none;
}
.loginButton:hover {
  background-color: black;
  color: #b0c7dd;
}
.privacyPolicy {
  font-size: 14px;
  color: rgb(137, 137, 137);
  margin-top: 10px;
  align-items: center;
  align-self: center;
  align-content: center;
  text-align: center;
}
</style>