<svelte:head>
    <title>About us</title>
    <meta name="description" content="This is a page about our website"/>
</svelte:head>

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
<hr />

<h3>How to use?</h3>
<p>This website is for creating your notes!! On the "Notes" page you can create and overview your created notes. You can also open each note in case you need a closer look on it or if you want to show it to your friends without showing your other personal data that you may have on this website!</p>
<p>Please, remember, that MyNote website is created for you to feel comfortable writing your notes and sharing your thoughts just to have an opportunity to recall them later.</p>

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
