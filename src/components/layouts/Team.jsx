import {
	Container,
	Text,
	Avatar,
	Image,
	Card,
	Box,
	Center,
	Flex,
	Blockquote,
} from "@chakra-ui/react";
import { FirstAidKit, Pulse, PersonSimple, Eye } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import team_data from "../../data/team.json";

// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const MotionCard = motion(Card.Root);

const Team = () => {
	useEffect(() => {
		setTimeout(() => {
			ScrollReveal().reveal(".reveal-subtitle", {
				duration: 1000,
				delay: 150,
				origin: "bottom",
				distance: "20px",
				easing: "ease-out",
			});
			ScrollReveal().reveal(".reveal-description", {
				duration: 1000,
				delay: 250,
				origin: "bottom",
				distance: "20px",
				easing: "ease-out",
			});
			ScrollReveal().reveal(".reveal-services", {
				duration: 1000,
				delay: 300,
				origin: "bottom",
				distance: "20px",
				easing: "ease-out",
			});
		}, 2);
	}, []);

	return (
		<Container my="20" maxW="6xl" px="4" py="6">
			<Text
				className="reveal-subtitle"
				fontSize="3xl"
				fontWeight="800"
				color="#000000"
				mb="10"
			>
				Meet Our Team
			</Text>

			<Blockquote.Root
				className="reveal-description"
				colorPalette="green"
				mb="14"
				py="6"
				bg="green.50"
			>
				<Blockquote.Content cite="https://" />
				<Blockquote.Caption fontSize="md">
					<cite>
						Our team comprises qualified and experienced doctors committed to
						your care. With expertise across various medical fields, we ensure
						comprehensive treatment. Every patient is treated with compassion,
						respect, and professionalism. We're here to serve the Titabar
						community with trusted healthcare.
					</cite>
				</Blockquote.Caption>
			</Blockquote.Root>

			<Swiper
				modules={[Autoplay, Pagination]}
				autoplay={{
					delay: 2000, // 3 seconds
					disableOnInteraction: false, // keeps autoplay even after user interaction
				}}
				loop={true}
				pagination={{
					dynamicBullets: true,
				}}
				breakpoints={{
					0: {
						slidesPerView: 1, // Mobile
					},
					640: {
						slidesPerView: 2, // Small tablets
					},
					768: {
						slidesPerView: 3, // Tablets
					},
					1024: {
						slidesPerView: 4, // Desktops
					},
				}}
				spaceBetween={10}
				className="mySwiper"
			>
				{team_data.team_data.map((member) => (
					<SwiperSlide>
						<Center>
							<Box my="10" mx="10">
								<MotionCard
									width="250px"
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<Card.Root width="250px" height="250px">
										<Card.Body gap="2">
											<Center>
												<Image
													src="https://bit.ly/naruto-sage"
													boxSize="120px"
													borderRadius="full"
													fit="cover"
													alt="Naruto Uzumaki"
													border="6px solid"
													borderColor="green.400"
												/>
											</Center>
											<Card.Title mt="2">
												<Center>
													<Text textAlign="center" fontWeight="800">
														{member.name}
													</Text>
												</Center>

												<Center>
													<Text fontWeight="500" fontSize="sm" mt="-1">
														{member.department}
													</Text>
												</Center>
											</Card.Title>
											{/* <Card.Description>{member.description}</Card.Description> */}
										</Card.Body>
										<Card.Footer justifyContent="flex-end"></Card.Footer>
									</Card.Root>
								</MotionCard>
							</Box>
						</Center>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

export default Team;
