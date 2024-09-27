import { Outlet } from "react-router-dom";
import Navbar from "../fragments/guest/Navbar";
import { Box } from "@chakra-ui/react";

export default function MainLayout() {
  return (
    <Box w={"100%"} h={"min-h-screen"} justifyContent={"center"} alignItems={"center"} bg={"#F8F7F3"}>
      <Navbar />
      <Box w={"1400px"} h={"min-h-screen"} mx={"auto"} borderLeft={"2px"} borderRight={"2px"} borderColor={"gray.600"}>
        <Outlet />
      </Box>
    </Box>
  )
}
