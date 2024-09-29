import { Outlet } from "react-router-dom";
import Navbar from "../fragments/dashboard/Navbar";
import { Box } from "@chakra-ui/react";


export default function DashboardLayout() {
  return (
    <Box w={"100%"} h={"min-h-screen"} justifyContent={"center"} alignItems={"center"} bg={"#F8F7F3"}>
        <Navbar/>
        <Box w={"1400px"} h={"min-h-screen"} mx={"auto"} p={"4"} borderLeft={"2px"} borderRight={"2px"} borderColor={"black"}>
            <Outlet/>
        </Box>
    </Box>
  )
}
