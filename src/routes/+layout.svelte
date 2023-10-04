<header>
	<nav class="nav-links">
		<ul>
			<li><a href="/">Main page</a></li>
			<li><a href="/about">About us</a></li>
			<li><a href="/notes">Notes</a></li>
		</ul>
	</nav>
</header>

<slot />

<style>
	header {
		background-color: white;
		margin: 0px -20px 0px -20px;
		padding: 20px;
		color: #fff;
		text-align: center;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	nav {
		width: 80%;
		position: sticky;
		margin: 5px auto;
		z-index: 1;
		display: flex;
		margin-right: 0px;
		text-transform: uppercase;
	}
	nav.nav-links {
		width: 80%;
		position: sticky;
		margin-top: 10px;
		margin-bottom: 3px;
		z-index: 1;
		display: flex;
		margin-right: 0px;
		justify-content: flex-end;
	}
	.nav-links ul li {
		list-style: none;
		display: inline-block;
		margin: 0 25px;
	}
	.nav-links ul li a {
		color: black;
		text-decoration: none;
		transition: 0.3s;
	}
	.nav-links ul li a:hover {
		color: #b0c7dd;
	}
</style>
