<script>
import Home from './components/Home/Home.svelte'	
import {filmContents} from './store/films'


</script>




<main style="background-image: url({`/images/${$filmContents.Featured.CoverImage}`})">
<Home/>
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
		background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
			
	}
	

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>