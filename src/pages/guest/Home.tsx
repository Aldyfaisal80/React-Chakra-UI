import { Box } from "@chakra-ui/react";
import Section1 from "./sub-pages-home/Section1";
import Section2 from "./sub-pages-home/Section2";
import Section3 from "./sub-pages-home/Section3";
import Section4 from "./sub-pages-home/Section4";


export default function Home() {
  return (
    <Box>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Box>
  )
}


