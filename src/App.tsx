// import { Heading, Text, Flex } from '@chakra-ui/react';
// import { ListItem, UnorderedList } from '@chakra-ui/react'

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
export default function App() {
    return (
        // <Flex w={"100%"} h={"100vh"} justify={"center"} align={"center"} direction={"column"} gap={"10px"}>
        //     <Flex direction={"column"} gap={5} align={"center"}>
        //         <Heading color={"red"}>ReactVite JS x Chakra</Heading>
        //         <Text fontSize={"1.5rem"}>Build with 💖 by Avnexcode</Text>
        //     </Flex>
        //     <Flex>
        //         <Heading>Installed Dependencies:</Heading>
        //     </Flex>
        //     <Flex>
        //         <UnorderedList fontSize={"1.3rem"}>
        //             <ListItem>Chakra UI</ListItem>
        //             <ListItem>Tanstack Query, Axios, Formik</ListItem>
        //             <ListItem>React Icons</ListItem>
        //             <ListItem>React Router DOM</ListItem>
        //         </UnorderedList>
        //     </Flex>
        // </Flex>
        <RouterProvider router={router} />
    );
}
