import { Box, Button, Flex, Grid, GridItem, Image, Text, Spinner, Alert, Heading, Card, CardBody, CardFooter, ButtonGroup } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../../../features/product";
import ButtonCard from "../../../components/elements/ButtonCard";
import { useCategories } from './../../../features/category/useCategories';
import Pagination from "../../../components/elements/Pagination";

export default function Section3() {
    const [page, setPage] = useState(1);
    const { data, loading, error } = useProducts(8, page);
    const { data: categories } = useCategories(50, 1);
    const navigate = useNavigate();


    const products = data?.data?.products || [];
    const totalPages = data?.totalPages || 1;

    useEffect(() => {
        navigate(`/?page=${page}`);
    }, [page, navigate]);

    if (loading) {
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

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <Box py={"50px"} borderBottom={"2px"} borderColor={"gray.600"}>
            <Flex w="100%" h="max-content" flexDirection="column" justifyContent="center" alignItems="center">
                <Heading>Discover Items You Want The Most</Heading>
                <Text w={"60%"} textAlign={"center"}>
                    Explore our curated collection and find your perfect products, from cutting-edge technology to stylish accessories. Enhance your lifestyle and productivity with the perfect choice for every need.
                </Text>
            </Flex>

            <Box w="min-w-full"
                h="max-content"
                mt="20px"
                display="flex"
                gap="20px"
                overflowX="auto"
                scrollBehavior="smooth"
                p="20px"
                mx={"50px"}
                borderX={"2px"}
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '&': {
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }
                }}
            >
                {categories?.data?.categories.map((category) => (
                    <ButtonGroup size="lg" key={category.id} gap="20px" display="flex">
                        <Button variant="outline" colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"} px={"25px"} py={"20px"}>
                            <Text>{category.name}</Text>
                        </Button>
                    </ButtonGroup>
                ))}
            </Box>

            <Flex w="100%" h="max-content" justifyContent="center" alignItems="center" my={"50px"}>
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
                                            {product.category.name}

                                        <Text fontSize="md">
                                            {product?.category?.name}

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

            <Pagination currentPage={page} totalPagesCount={totalPages} onPageChange={handlePageChange} />
        </Box>
    );
}
