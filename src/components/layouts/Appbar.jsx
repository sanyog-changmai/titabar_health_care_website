import { Container, Box, Text } from "@chakra-ui/react";

const Appbar = () => {
	return (
		<Container maxW="6xl" px="4">
			<Box>
				<Text
					mt="6"
					className="roboto-website-name"
					textStyle="lg"
					color="#00000"
					fontWeight="small"
					letterSpacing="sm"
				>
					Titabar HealthCare Center
				</Text>
			</Box>
		</Container>
	);
};

export default Appbar;
