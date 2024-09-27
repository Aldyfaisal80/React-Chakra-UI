import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Smartphone from "../../../../public/assets/images/smartphone.jpg";
import Headphone from "../../../../public/assets/images/headphone.jpg";
import Sneaker from "../../../../public/assets/images/sneakers.jpeg";
import Bagpack from "../../../../public/assets/images/bagpack.jpg";


export default function Section2() {
    return (
        <Flex w={"100%"} h={"auto"} flexDirection={"column"} p={"50px"} borderBottom={"2px"} borderColor={"gray.600"}>
            <Heading>Most Popular Stuff</Heading>
            <Text fontWeight={"semibold"}>The week's most popular stuff across all categories</Text>
            <Flex w={"100%"} gap={"30px"} py={"50px"} justifyContent={"space-between"} alignItems={"center"}>
                <Box w={"25%"} h={"auto"} border={"2px"} bg={"#FE90E7"} boxShadow={"6px 6px 0px rgba(0, 0, 0, 1)"}>
                    <Image src={Smartphone} objectFit={"cover"} w={"100%"} h={"150px"}/>
                    <Box p={4}>
                        <Box display="flex" justifyContent="space-between" alignItems={"center"} gap={2}>
                            <Flex flexFlow={"column"}>
                                <Text fontWeight="bold" fontSize="xl" color={"black"}>Smartphone X</Text>
                                <Text fontSize="md" color={"black"}>Lorem</Text>
                            </Flex>
                            <Button bg={"white"} color={"black"} h={"50px"} px={"15px"} fontSize={"lg"} border={"1px"} fontWeight={"bold"} borderRadius={"unset"} boxShadow={"4px 4px 0px rgba(0, 0, 0, 1)"}>Buy Now</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w={"25%"} h={"auto"} border={"2px"} bg={"#FF9900"} boxShadow={"6px 6px 0px rgba(0, 0, 0, 1)"}>
                    <Image src={Sneaker} objectFit={"cover"} w={"100%"} h={"150px"}/>
                    <Box p={4}>
                        <Box display="flex" justifyContent="space-between" alignItems={"center"} gap={2}>
                            <Flex flexFlow={"column"}>
                                <Text fontWeight="bold" fontSize="xl" color={"black"}>Sneakers Y</Text>
                                <Text fontSize="md" color={"black"}>Lorem</Text>
                            </Flex>
                            <Button bg={"white"} color={"black"} h={"50px"} px={"15px"} fontSize={"lg"} border={"1px"} fontWeight={"bold"} borderRadius={"unset"} boxShadow={"4px 4px 0px rgba(0, 0, 0, 1)"}>Buy Now</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w={"25%"} h={"auto"} border={"2px"} bg={"#FE90E7"} boxShadow={"6px 6px 0px rgba(0, 0, 0, 1)"}>
                    <Image src={Headphone} objectFit={"cover"} w={"100%"} h={"150px"}/>
                    <Box p={4}>
                        <Box display="flex" justifyContent="space-between" alignItems={"center"} gap={2}>
                            <Flex flexFlow={"column"}>
                                <Text fontWeight="bold" fontSize="xl" color={"black"}>Headphone Z</Text>
                                <Text fontSize="md" color={"black"}>Lorem</Text>
                            </Flex>
                            <Button bg={"white"} color={"black"} h={"50px"} px={"15px"} fontSize={"lg"} border={"1px"} fontWeight={"bold"} borderRadius={"unset"} boxShadow={"4px 4px 0px rgba(0, 0, 0, 1)"}>Buy Now</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w={"25%"} h={"auto"} border={"2px"} bg={"#FF9900"} boxShadow={"6px 6px 0px rgba(0, 0, 0, 1)"}>
                    <Image src={Bagpack} objectFit={"cover"} w={"100%"} h={"150px"}/>
                    <Box p={4}>
                        <Box display="flex" justifyContent="space-between" alignItems={"center"} gap={2}>
                            <Flex flexFlow={"column"}>
                                <Text fontWeight="bold" fontSize="xl" color={"black"}>Bagpack A</Text>
                                <Text fontSize="md" color={"black"}>Lorem</Text>
                            </Flex>
                            <Button bg={"white"} color={"black"} h={"50px"} px={"15px"} fontSize={"lg"} border={"1px"} fontWeight={"bold"} borderRadius={"unset"} boxShadow={"4px 4px 0px rgba(0, 0, 0, 1)"}>Buy Now</Button>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}
