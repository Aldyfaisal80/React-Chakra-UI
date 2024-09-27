import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import HeroImg from "../../../../public/assets/images/3DheroImg2.jpg";

export default function Section1() {
    return (
        <Flex w={"100%"} h={"auto"} borderBottom={"2px"} borderColor={"gray.600"} justifyContent={"space-between"}>
            <Flex flexDirection={"column"} w={"45%"} h={"750px"} borderRight={"1px"} borderColor={"gray.600"} p={"50px"} bg={"#FF9900"} color={"white"} justifyContent={"center"} alignItems={"center"}>
                <Heading fontSize={"6xl"} fontWeight={"bold"} mb={"20px"}>The Heart of Home Essentials</Heading>
                <Text fontSize={"2xl"} fontWeight={"semibold"}>Discover the Joy of Shopping — Find Everything You Need, Anytime, Anywhere!</Text>
                <Flex w={"100%"} mt={"20px"} gap={"20px"}>
                    <Button w={"auto"} h={"60px"} bg={"black"} color={"white"} px={"30px"} fontSize={"2xl"} border={"1px"} fontWeight={"bold"} borderRadius={"unset"} _hover={{ bg: "white", color: "black", boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)" }}>Explore</Button>
                    <Button w={"auto"} h={"60px"} bg={"white"} color={"black"} px={"30px"} fontSize={"2xl"} border={"1px"} fontWeight={"bold"} borderRadius={"unset"} _hover={{ bg: "black", color: "white", boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)" }}>How to shopping?</Button>
                </Flex>
            </Flex>
            <Flex w={"55%"} h={"750px"} borderLeft={"1px"} borderColor={"gray.600"} bg={"#FE90E7"} color={"white"} px={"70px"} py={"100px"} justifyContent={"center"} alignItems={"center"}>
                <Box w={"70%"} h={"100%"} border={"2px"} bg={"white"} boxShadow={"12px 12px 0px rgba(0, 0, 0, 1)"}>
                    <Image src={HeroImg} objectFit={"cover"} />
                    <Box p={4}>
                        <Text mt={2} fontWeight="bold" fontSize="xl"></Text>
                        <Text fontSize="lg"></Text>
                        <Box display="flex" justifyContent="space-between" alignItems={"center"} mt={4} gap={2} borderTop="2px solid black">
                            <Flex flexFlow={"column"}>
                                <Text fontWeight="bold" fontSize="2xl" color={"black"}>App Market</Text>
                                <Text fontWeight={"semibold"} color={"black"}>Find Everything You Need, <br /> Anytime, Anywhere!</Text>
                            </Flex>
                            <Button bg={"black"} color={"white"} h={"60px"} px={"20px"} fontSize={"xl"} border={"1px"} fontWeight={"bold"} borderRadius={"unset"} _hover={{ bg: "white", color: "black", boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)" }}>Get Started</Button>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}
