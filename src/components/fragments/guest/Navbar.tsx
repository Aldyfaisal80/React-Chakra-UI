import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import ButtonPrimary from "../../elements/ButtonPrimary";

export default function Navbar() {
    return (
        <Box w={"100%"} h={"70px"} borderBottom={"4px"} borderColor={"gray.600"}>
            <Flex w={"1400px"} h={"100%"} p={"4"} mx={"auto"} justifyContent={"space-between"} alignItems={"center"} borderX={"4px"} borderColor={"gray.600"} color={"gray.600"}>
                <Flex alignItems={"center"} gap={"4"} fontSize={"2xl"} fontWeight={"bold"}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<TiThMenu />} fontSize={"2xl"} fontWeight={"bold"} border={"none"} variant="outline" aria-label="Menu" />
                        <MenuList>
                            <MenuItem as={Link} to="/dashboard">Dashboard</MenuItem>
                            <MenuItem as={Link} to="/">All Products</MenuItem>
                        </MenuList>
                    </Menu>
                    <Link to={"/"}>APP MARKET</Link>
                </Flex>
                <Flex alignItems={"center"} gap={"4"}>
                    <ButtonPrimary text={"Login"} to={"/login"}/>
                    <ButtonPrimary text={"Register"} to={"/register"}/>
                </Flex>
            </Flex>
        </Box>
    );
}
