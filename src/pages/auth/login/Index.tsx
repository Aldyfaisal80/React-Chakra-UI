import { ExternalLinkIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, Input, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {

  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"} bg={"#F8F7F3"}>
      <Button
        as={RouterLink}
        to={"/"}
        bg={"#ffb747"}
        position={"absolute"}
        top={"20px"}
        left={"20px"}
        leftIcon={<ArrowBackIcon />}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"} 
        w={"70px"}
        h={"50px"}
        boxShadow={"4px 4px 0px 0px rgba(0, 0, 0, 1)"}
        _hover={{
          transform: 'translate(4px, 4px)',
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 1)',
        }}
      />
      <FormControl
        display="flex"
        flexDirection="column"
        gap={5}
        w={"500px"}
        borderTop={"2px solid black"}
        borderLeft={"2px solid black"}
        p={"20px"}
        borderRadius={"10px"}
        boxShadow={"8px 8px 0px 0px rgba(0, 0, 0, 1)"}
      >
        <Text fontSize={"1.5rem"} fontWeight={"bold"}>
          Login
        </Text>
        <Input
          placeholder="Email"
          border={"2px solid black"}
          boxShadow="5px 5px 0px black"
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{
            transform: 'translate(5px, 5px)',
            boxShadow: '0px 0px 0px black',
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          border={"2px solid black"}
          boxShadow="5px 5px 0px black"
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{
            transform: 'translate(5px, 5px)',
            boxShadow: '0px 0px 0px black',
          }}
        />
        <Button
          type="submit"
          bg={"#ffb747"}
          boxShadow="5px 5px 0px black"
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{
            transform: 'translate(5px, 5px)',
            boxShadow: '0px 0px 0px black',
          }}
        >
          Login
        </Button>
        <Link as={RouterLink} to='/auth/register'>
          Don't have an account? <ExternalLinkIcon mx='2px' />
        </Link>
      </FormControl>
    </Flex>
  );
}
