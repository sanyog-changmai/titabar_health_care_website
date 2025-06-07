import {
	Box,
	Button,
	Flex,
	Text,
	Image,
	Container,
	Center,
} from "@chakra-ui/react";
import HERO_IMAGE from "../../assets/doctors.png";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		setTimeout(() => {
			ScrollReveal().reveal(".reveal-welcome-text", {
				duration: 1000,
				delay: 150,
				origin: "bottom",
				distance: "20px",
				easing: "ease-out",
			});
			ScrollReveal().reveal(".reveal-caption", {
				duration: 1000,
				delay: 250,
				origin: "bottom",
				distance: "20px",
				easing: "ease-out",
			});
			ScrollReveal().reveal(".reveal-description", {
				duration: 1000,
				delay: 350,
				origin: "bottom",
				distance: "20px",
				easing: "ease-out",
			});
		}, 2);
	}, []);

	return (
		<Container maxW="6xl" px="4" py="6">
			<Flex
				mt={["2rem", "5rem"]}
				justify="space-between"
				flexWrap={["wrap", "nowrap"]}
				direction={["column", "column", "row"]}
				gap={12}
			>
				<Box>
					<Text
						className="reveal-welcome-text"
						fontSize="xs"
						fontWeight="600"
						letterSpacing="1px"
						wordSpacing="2px"
						color="green.600"
					>
						WELCOME TO TITABAR HEALTHCARE CENTER
					</Text>
					<Text
						className="reveal-caption"
						mt="2"
						fontSize={["3xl", "5xl"]}
						fontWeight="800"
						lineHeight="shorter"
					>
						Trust. Care. Cure.
					</Text>

					<Text
						className="reveal-caption"
						fontSize={["3xl", "5xl"]}
						fontWeight="800"
						lineHeight="shorter"
					>
						Reliable Care, Right Here in Titabar.
					</Text>

					<Text
						className="reveal-description"
						mt="5"
						fontWeight="300"
						maxWidth="900px"
					>
						Our Health Care Centre offers trusted medical services with a
						personal touch, from diagnostics to pharmacy, eyecare to
						physiotherapy, all under one roof, right here in your neighborhood.
					</Text>

					<Box className="reveal-description">
						<Button
							className="reveal-description"
							my="6"
							variant="surface"
							colorPalette="green"
						>
							Get Appointment
						</Button>
					</Box>
				</Box>

				<Box>
					<Center>
						<Image
							className="reveal-caption"
							mt="-20"
							mx="6"
							width="1000px"
							src={HERO_IMAGE}
							fit="cover"
							borderRadius="20px"
						/>
					</Center>
				</Box>
			</Flex>
		</Container>
	);
};

export default Hero;
