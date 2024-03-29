import React from 'react'
import Admin from '..'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Text, } from "@chakra-ui/react";

import { fetchOrders } from "./../../../api";
import { useQuery } from 'react-query';
function Orders() {
    const { isLoading, isError, data, error } = useQuery(["admin:orders"], () =>
        fetchOrders()
    );
    if (isLoading) {
        return <div>Loading..</div>;
    }
    if (isError) {
        console.log("error, ", error);
        return <div>Error {error.message}</div>;
    }
    // console.log(data);
    return (
        <div>
            <Admin />
            <Text fontSize={"2xl"} p={5}>
                Orders
            </Text>
            <Table variant={"simple"}>
                <TableCaption>Satışların Bulunduğu Tablo.</TableCaption>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Address</Th>
                        <Th isNumeric>Items</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item) => (
                        <Tr key={item._id}>
                            <Td>{item.user.email}</Td>
                            <Td>{item.adress}</Td>
                            <Td isNumeric>{item.items.length}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    )
}

export default Orders