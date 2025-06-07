import "./App.css";

import { Container, Box } from "@chakra-ui/react";
import Appbar from "./components/layouts/Appbar";
import Hero from "./components/layouts/Hero";
import Services from "./components/layouts/Services";
import Team from "./components/layouts/Team";
import Testimony from "./components/layouts/Testimony";

function App() {
	return (
		<Container>
			<Box mt="10" bg="green.50" p="8" borderRadius="xl">
				<Appbar />
				<Hero />
			</Box>
			<Services />
			<Team />
			<Testimony />
		</Container>
	);
}

export default App;
