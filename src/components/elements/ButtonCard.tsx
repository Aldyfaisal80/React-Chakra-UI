import { Button } from "@chakra-ui/react"
import { ElementType } from "react"

type ButtonCardProps = {
    as?: ElementType
    to?: string
    w?: string
    text: string
    bgColor?: string
}

const ButtonCard = ({ as, to, w, text, bgColor }: ButtonCardProps) => {
    return (
        <Button
            as={as}
            to={to}
            mt={2}
            bgColor={bgColor}
            borderRadius={"unset"}
            boxShadow="4px 4px 0px rgba(0, 0, 0, 1)"
            _hover={{
                transform: 'translate(5px, 5px)',
                boxShadow: '0px 0px 0px black',
            }}
            w={w}>
            {text}
        </Button>
    )
}

export default ButtonCard