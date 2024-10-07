import { Button } from "@chakra-ui/react";
import { ElementType } from "react";

type ButtonCardProps = {
    as?: ElementType;
    to?: string;
    w?: string;
    text: string;
    color?: string;
    bgColor?: string;
    fontWeight?: string;
    border?: string;
    _hover?: object;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
};

const ButtonCard = ({ as, to, w, text, bgColor, color, fontWeight, border, type, onClick }: ButtonCardProps) => {
    return (
        <Button
            as={as}
            to={to}
            mt={2}
            color={color}
            bgColor={bgColor}
            fontWeight={fontWeight}
            borderRadius={"unset"}
            boxShadow="4px 4px 0px rgba(0, 0, 0, 1)"
            border={border}
            _hover={{
                transform: "translate(5px, 5px)",
                boxShadow: "0px 0px 0px black",
            }}
            w={w}
            type={type}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default ButtonCard;