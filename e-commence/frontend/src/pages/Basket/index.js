import React, { useRef, useState } from 'react'
import { useBasket } from "../../contexts/BasketContext"
import { Link } from "react-router-dom"
import { Alert, Image, Button, Text, Box } from '@chakra-ui/react';

function Basket() {
    const [address, setAddress] = useState("");
    const initialRef = useRef();

    const { items, removeFromBasket, emptyBasket } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0);

    const handleSubmitForm = async () => {
        const itemIds = items.map((item) => item._id);

        const input = {
            address,
            items: JSON.stringify(itemIds),
        };


    };

    return (
        <Box p="5" >
            {
                items.length < 1 ? (
                    <Alert status="warning">You have not any items in your basket.</Alert>
                ) : <>
                    <ul style={{ listStyleType: "decimal" }}>
                        {items.map((item) => (
                            <li key={item._id} style={{ marginBottom: 15 }}>
                                <Link to={`/product/${item._id}`}>
                                    <Text fontSize="18"> {item.title} - {item.price} TL  </Text>
                                    <Image htmlWidth={200} loading="lazy" src={item.photos[0]} alt="basket item" />
                                </Link>

                                <Button mt="2" size="sm" colorScheme="pink" onClick={() => removeFromBasket(item._id)}                               >
                                    Remove from basket
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <Box mt={10}>
                        <Text fontSize="22">Total: {total} TL </Text>
                    </Box>
                </>
            }

        </Box >
    )
}

export default Basket