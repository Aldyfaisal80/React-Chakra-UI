import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ReactNode } from "react";

interface ButtonPrimaryProps {
    text: ReactNode
    to?: string
}

const ButtonPrimary = ({ text, to, ...props }: ButtonPrimaryProps) => {
    return (
        <Button
            as={RouterLink}
            to={to}  
            w={"150px"}
            height="12"
            border="2px"
            borderColor="black"
            fontSize={"xl"}
            fontWeight={"bold"}
            padding="2.5"
            bg="#FFB344"
            _hover={{
                bg: "#FFAB2C",
                boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
            }}
            borderRadius="1rem"
            {...props}
        >
            {text}
        </Button>
    );
}

export default ButtonPrimary
