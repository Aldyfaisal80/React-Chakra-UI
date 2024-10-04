import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

export default function NavbarCopy() {
    return (
        <Box w={"100%"} h={"70px"} borderBottom={"2px"} borderColor={"black"}>
            <Flex w={"1400px"} h={"100%"} p={"4"} mx={"auto"} justifyContent={"space-between"} alignItems={"center"} borderX={"2px"} borderColor={"black"} color={"black"}>
                <Flex alignItems={"center"} gap={"4"} fontSize={"2xl"} fontWeight={"bold"}>
                    <Menu>
                    <MenuButton as={IconButton} icon={<TiThMenu />} fontSize={"2xl"} fontWeight={"bold"} border={"none"} variant="outline" aria-label="Menu" />
                        <MenuList>
                            <MenuItem as={Link} to="/">Home</MenuItem>
                            <MenuItem as={Link} to="/dashboard/create-product">Create Product</MenuItem>
                            <MenuItem as={Link} to="/dashboard/create-category">Create Categories</MenuItem>
                        </MenuList>
                    </Menu>
                    <Link to={"/dashboard"}>DASHBOARD</Link>
                </Flex>
                <Flex alignItems={"center"} gap={"4"} fontSize={"2xl"} fontWeight={"bold"}>
                    <Link to={"/dashboard/productsAdmin"}>Products</Link>
                    <Link to={"/dashboard/category"}>Category</Link>
                </Flex>
            </Flex>
        </Box>
    );
}
