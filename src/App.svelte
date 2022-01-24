<script>
	import { Router, Route } from "svelte-navigator"
	import Home from "./routes/home.svelte"
	import Works from "./routes/works.svelte"

</script>

<Router>
	<main>
		<Route path="/">
			<Home />
		</Route>

		<Route path="works">
			<Works />
		</Route>
	</main>
</Router>

<style>
	main {
		font-family: 'M PLUS Rounded 1c', sans-serif;
	}
	
</style>