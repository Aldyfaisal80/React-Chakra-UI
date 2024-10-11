import { Box, ButtonGroup, Flex, Image, Text } from "@chakra-ui/react";
import { useDeleteProduct, useProductID } from "../../../../features/product";
import { useNavigate, useParams } from "react-router-dom";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { Product } from "../../../../types/Type";
import Swal from "sweetalert2";
import { Link as RouterLink } from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    const { data: product, loading, error, message, status } = useProductID(id);
    console.log(status);


    console.log(product);
    console.log(message);

    if (loading) {
        return (
            <Flex justifyContent={'center'} w={'100%'} h={'100vh'} alignItems={'center'} bg="#f9f9f9">
                <Text fontSize="3xl" fontWeight="bold">Loading...</Text>
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex justifyContent={'center'} w={'100%'} h={'100vh'} alignItems={'center'} bg="#f9f9f9">
                <Text fontSize="3xl" fontWeight="bold">{error.message}</Text>
            </Flex>
        );
    }

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    return (
        <Flex justifyContent={'center'} w={'100%'} h={'100vh'} alignItems={'center'} bg="#f9f9f9">
            <Flex
                direction={'column'}
                w={"600px"}
                p={4}
                bg="white"
                border={"2px solid black"}
                boxShadow={"8px 8px 0px 0px rgba(0, 0, 0, 1)"}
            >
                <Box w={'100%'} h={'300px'} mb={4} overflow="hidden">
                    <Image
                        w={'100%'}
                        h={'100%'}
                        src={product?.image}
                        objectFit={'cover'}
                        alt={product?.name}
                    />
                </Box>

                <Box mb={2}>
                    <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase" color="black">
                        {product?.name || 'Product Name Not Available'}
                    </Text>
                </Box>

                <Box mb={2}>
                    <Text fontSize="lg" color="black">
                        {product?.description || 'Description Not Available'}
                    </Text>
                </Box>

                <Box mb={2}>
                    <Text fontSize="lg" fontWeight="semibold" color="black">
                        Price: {currencyFormatter.format(product?.price)}
                    </Text>
                </Box>

                <Box>
                    <Text fontSize="lg" color="black" fontWeight="semibold" textTransform="uppercase">
                        Category: {product?.category?.name || 'Category Not Available'}
                    </Text>
                </Box>
                <Box mb={2} display={'flex'} justifyContent={'space-between'}>
                    <ButtonGroup>
                        <ButtonCard color="white" bgColor="#FF9900" text={'Back'} as={RouterLink} to={'/'} />
                    </ButtonGroup>
                    <ButtonGroup>
                        <ButtonCard color="white" bgColor="#FF9900" text={'Buy'} as={RouterLink} to={`/`} />
                    </ButtonGroup>
                </Box>
            </Flex>
        </Flex>
    );
}
