import { Box, Button, Flex, Grid, GridItem, Image, Text, Spinner, Alert, Heading, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../../features/product";
import ButtonCard from "../../../components/elements/ButtonCard";

export default function Section3() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useProducts(12, page);
    
    const products = data?.data?.products || [];
    console.log(products);
    const totalPages = data?.totalPages || 1;

    if (isLoading) {
        return (
            <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
                <Spinner size="xl" />
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
                <Alert status="error">{error.message}</Alert>
            </Flex>
        );
    }

    return (
        <Box py={"50px"} borderBottom={"2px"} borderColor={"gray.600"}>
            <Flex w="100%" h="max-content" flexDirection="column" justifyContent="center" alignItems="center">
                <Heading>Discover Items You Want The Most</Heading>
                <Text w={"60%"} textAlign={"center"}>
                    Explore our curated collection and find your perfect products, from cutting-edge technology to stylish accessories. Enhance your lifestyle and productivity with the perfect choice for every need.
                </Text>
            </Flex>

            <Flex w="100%" h="max-content" justifyContent="center" alignItems="center" mt={"50px"}>
                <Grid templateColumns="repeat(4, 1fr)" w="80%" h="fit-content" gap={6} justifyContent="center" mx="auto">
                    {products.map((product) => (
                        <GridItem key={product.id} w="100%" h="auto" border="2px solid black" _hover={{ boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 1)" }} transition="box-shadow 0.3s ease-in-out">
                            <Card>
                                <CardBody padding={0}>
                                    <Image src={product.image} alt={product.name} w="100%" h="250px" objectFit="cover" />
                                    <Box p={4}>
                                        <Text mt={2} fontWeight="bold" w={"250px"} fontSize="lg">
                                            {product.name}
                                        </Text>
                                        <Text fontSize="md" as={RouterLink} to={`/categories/${product.category.id}`}>
                                            Category: {product.category.name}
                                        </Text>
                                        <Text fontSize="md">
                                            Price: ${product.price}
                                        </Text>
                                    </Box>
                                </CardBody>

                                <CardFooter display="flex" justifyContent="space-between" mt={4} gap={2} borderTop="2px solid black">
                                    <ButtonCard as={RouterLink} bgColor="#FF9900" to={`/products/${product.id}`} text="Details" />
                                    <ButtonCard as={RouterLink} bgColor="#FF9900" to={`/`} text="Add to Cart" />
                                </CardFooter>
                            </Card>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>

            <Flex display={"flex"} justifyContent={"center"} alignItems={"center"} mt={6}>
                <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Previous
                </Button>
                <Text mx={4}>
                    Page {page} of {totalPages}
                </Text>
                <Button onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))} disabled={page === totalPages}>
                    Next
                </Button>
            </Flex>
        </Box>
    );
}