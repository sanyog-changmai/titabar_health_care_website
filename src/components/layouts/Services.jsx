import {
	Container,
	Text,
	Avatar,
	Button,
	Card,
	Box,
	Flex,
	Center,
} from "@chakra-ui/react";
import { FirstAidKit, Pulse, PersonSimple, Eye } from "@phosphor-icons/react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const MotionCard = motion(Card.Root);

const cardData = [
	{
		icon: <FirstAidKit size={32} weight="light" />,
		title: "Ultrasound",
		description:
			"Safe and accurate imaging to help diagnose internal conditions with clarity.",
	},
	{
		icon: <Pulse size={32} weight="light" />,
		title: "ECG",
		description:
			"Quick and precise heart monitoring to detect any irregularities or concerns.",
	},
	{
		icon: <Eye size={32} weight="light" />,
		title: "Eye Care",
		description:
			"Comprehensive vision checks and eye health support for all ages.",
	},
	{
		icon: <PersonSimple size={32} weight="light" />,
		title: "Physiotherapy",
		description:
			"Personalized physical therapy to restore mobility, strength, and well-being.",
	},
];

const Services = () => {
	useEffect(() => {
		setTimeout(() => {
			ScrollReveal().reveal(".reveal-subtitle", {
				duration: 1000,
				delay: 150,
				origin: "bottom",
				distance: "20px",
				easing: "ease-out",
			});
			ScrollReveal().reveal(".reveal-services", {
				duration: 1000,
				delay: 250,
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
				Our Services
			</Text>

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
				{cardData.map(({ icon, title, description }, index) => (
					<SwiperSlide>
						<Center>
							<Box key={index} flex="1 1 250px" maxW="250px" my="10">
								<MotionCard
									width="250px"
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<Card.Root width="250px">
										<Card.Body gap="2">
											<Avatar.Root
												size="lg"
												shape="rounded"
												colorPalette="green"
											>
												{icon}
											</Avatar.Root>
											<Card.Title mt="2">
												<Text fontWeight="800">{title}</Text>
											</Card.Title>
											<Card.Description>{description}</Card.Description>
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

export default Services;
