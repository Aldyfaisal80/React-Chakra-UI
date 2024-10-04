import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import ButtonCard from "../../../components/elements/ButtonCard";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";

export default function Section4() {
    return (
        <Box w={"100%"} h={"auto"} borderBottom={"2px"} borderColor={"gray.600"}>
            <Box w={"100%"} h={"auto"} p={"100px"} borderBottom={"2px"} borderColor={"gray.600"} bg={"#6FEDD7"}>
                <Flex w={"100%"} justifyContent={"center"} textAlign={"center"}>
                    <Heading>Largest Online Marketplace <br /> to buy and sell products</Heading>
                </Flex>
                <Flex w={"100%"} justifyContent={"center"} mt={"20px"} gap={"20px"}>
                    <ButtonCard text="Buy Now" w="180px" />
                    <ButtonCard text="Sell Now" w="180px" />
                </Flex>
            </Box>
            <Flex w="100%" h="auto" px="100px" py={"50px"} alignItems={"flex-end"} bg="gray.50">
                <Box w="50%" h="auto" mx="auto">
                    <Text fontSize="2xl" mb="4" fontWeight="bold">
                        Subscribe to get the latest updates on our products and offers
                    </Text>
                    <Flex>
                        <Input
                            placeholder="E.g. youremail@email.com"
                            size="lg"
                            borderColor="gray.500"
                            borderRadius={"unset"}
                            mr="2"
                        />
                        <Button bg={"#FE90E7"} size="lg" borderRadius={"unset"} border={"1px"} color={"black"} _hover={{ bg: "white" }} _focus={{ outline: "none" }}>
                            Subscribe
                        </Button>
                    </Flex>
                </Box>
                <Box w="50%" h="auto" justifyContent={"flex-end"} alignItems={"flex-end"}>
                    <Flex justifyContent={"flex-end"} alignItems={"flex-end"} gap={"10px"} fontSize={"3xl"} color={"gray.600"}>
                        <FaInstagram />
                        <FaFacebookSquare />
                        <AiFillTikTok />
                        <IoLogoYoutube />
                    </Flex>
                    <Flex justifyContent={"flex-end"} alignItems={"flex-end"} mt={"10px"}>
                        <Text color={"gray.600"}>© 2022. All rights reserved</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
