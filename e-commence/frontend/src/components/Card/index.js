import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Card({ item }) {
	return (
		<Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
			<Link to={`#/`}>
				<Image src={"https://picsum.photos/seed/picsum/600/300"} alt="product" loading="lazy" />

				<Box p="6">
					<Box d="plex" alignItems="baseline">11/03/2024</Box>
					<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">Macbook Pro</Box>
					<Box>100 TL</Box>
				</Box>
			</Link >
			<Button colorScheme="pink">Add to basket</Button>


		</Box >
	);
}

export default Card;
