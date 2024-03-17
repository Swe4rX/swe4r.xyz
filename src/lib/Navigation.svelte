<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="contact">Contact</a></li>
		<li><a href="projects">Projects</a></li>
	</ul>
</nav>

<style lang="postcss">
	nav {
		justify-content: center;
		display: flex;
		width:100%;
		z-index: 1000;
		backdrop-filter: blur(30px);
		background: transparent;
		height: 3vw;
		
		& ul {
			margin-top: 0.5vw;
			display: flex;
			flex-direction: row;
			width: 60%;
			justify-content: space-between;
			
			& li > a {
				border: none;
				&:hover {
					color: #f00;
				}
			}
			
			& li {
				font-size: x-large;
			}
		}
		
	}
</style>