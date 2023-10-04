<svelte:head>
	<title>Notes App</title>
	<meta name="description" content="This is your Note Website" />
</svelte:head>

<hr />

<main>
	<h1 style="font-size: 80px; text-align: left; margin-left: 20px; margin-top: 20px;">
		It's simple like that: <br /> Write down. Share.
	</h1>
	<p>World's largest platform for creating and sharing notes. Based in Innopolis, Russia.</p>
	<img
		class="mainpageimage"
		src="src/images/mainpagepgoto.jpg"
		alt="A woman and a man colleagues"
	/>

	<h3>What for?</h3>
	<p>
		Sharing is caring! Let people know what you're up to and what your plans for the week are.
		Create and share your thoughts on your job tasks or school and university assignments.
	</p>

	<h3>Why us?</h3>
	<p>
		We are the first and the largest website for creating notes for work or school and sharing them
		with the world. You can try creating notes yourself!
	</p>
</main>

<hr class="endinghr" />

<footer>
	<p class="fp">&copy; 2023 MyNote. All rights reserved.</p>
</footer>

<style>
	h3 {
		text-align: left;
		margin: 10px 0 10px 10px;
	}
	.endinghr {
		border-color: rgb(244, 244, 244);
		border-width: 1px;
		margin: 0px 30px;
	}
	.fp {
		font-size: 15px;
		text-align: right;
		margin-right: 20px;
	}
	.mainpageimage {
		margin: 10px -20px 0 -20px;
		max-width: 100%;
		width: 100%;
	}
	p {
		text-align: left;
		margin-bottom: 20px;
	}
</style>
