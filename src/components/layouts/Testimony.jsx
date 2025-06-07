import {
	Container,
	Text,
	Blockquote,
	Box,
	Avatar,
	Center,
	RatingGroup,
	Card,
} from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// import required modules
import { Pagination } from "swiper/modules";

import testimony_data from "../../data/testimony.json";

const Testimony = () => {
	useEffect(() => {
		setTimeout(() => {
			ScrollReveal().reveal(".reveal-subtitle", {
				duration: 1000,
				delay: 150,
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
				Testimony
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
						We care deeply about every patient. Their experiences reflect the
						heart of our work. Here’s what they had to say !!.
					</cite>
				</Blockquote.Caption>
			</Blockquote.Root>

			<Box className="reveal-services">
				<Swiper
					modules={[Autoplay, Pagination]}
					autoplay={{
						delay: 3000, // 3 seconds
						disableOnInteraction: false, // keeps autoplay even after user interaction
					}}
					loop={true}
					pagination={{
						dynamicBullets: true,
					}}
					className="mySwiper"
				>
					{testimony_data.testimony_data.map((data, index) => (
						<SwiperSlide key={index}>
							<Card.Root>
								<Box py="20">
									<Box>
										<Center>
											<Text
												fontSize={["lg", "xl", "2xl"]}
												px={["4", "1"]}
												maxW="700px"
												textAlign="center"
												fontWeight="700"
												color="green.700"
											>
												{data.testimony}
											</Text>
										</Center>
									</Box>
									<Box>
										<Center mt="10" mb="4">
											<RatingGroup.Root
												key="lg"
												count="5"
												defaultValue={data.rating}
												size="lg"
												colorPalette="orange"
												readOnly
											>
												<RatingGroup.HiddenInput />
												<RatingGroup.Control />
											</RatingGroup.Root>
										</Center>
										<Center>
											<Avatar.Root colorPalette="green">
												<Avatar.Fallback name={data.name} />
											</Avatar.Root>
											<Text ml="2">{data.name}</Text>
										</Center>
									</Box>
								</Box>
							</Card.Root>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Container>
	);
};

export default Testimony;
