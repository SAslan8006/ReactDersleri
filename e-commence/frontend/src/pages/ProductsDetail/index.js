import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api';
import { Text, Button, Box } from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import { useBasket } from "../../contexts/BasketContext"
function ProductDetail() {
    const { addToBasket, items } = useBasket();
    const { product_id } = useParams();
    const { isLoading, error, data } = useQuery(['product', product_id], () => fetchProduct(product_id))
    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
    const findBasketItem = items.find((item) => item._id === product_id);
    const images = data.photos.map((url) => ({ original: url }));
    return (
        <div>
            <Button colorScheme={findBasketItem ? "pink" : "green"} onClick={() => addToBasket(data, findBasketItem)}>{findBasketItem ? "Remove from basket" : "Add to basket"}</Button>
            <Text as="h2" fontSize="2xl">{data.title}</Text>
            <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
            <p>{data.description}</p>
            <Box margin="10">
                <ImageGallery items={images} showThumbnails={false} />
            </Box>
        </div >
    )
}

export default ProductDetail