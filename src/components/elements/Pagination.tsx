import { Button, Flex } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
    currentPage: number;
    totalPagesCount: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPagesCount, onPageChange }: PaginationProps) => {
    const totalVisibleButtons = 6;

    const getPaginationButtons = () => {
        const buttons = [];

        if (totalPagesCount <= totalVisibleButtons + 2) {
            for (let i = 1; i <= totalPagesCount; i++) {
                buttons.push(i);
            }
        } else {
            buttons.push(1);

            const start = Math.max(2, currentPage - 2);
            const end = Math.min(totalPagesCount - 1, currentPage + 2);

            if (start > 2) {
                buttons.push('...');
            }

            for (let i = start; i <= end; i++) {
                buttons.push(i);
            }

            if (end < totalPagesCount - 1) {
                buttons.push('...');
            }

            buttons.push(totalPagesCount);
        }

        return buttons;
    };

    return (
        <Flex justifyContent="center" mt={4} alignItems="center">
            <Button
                onClick={() => onPageChange(currentPage - 1)}
                isDisabled={currentPage === 1}
                borderRadius="unset"
                bg={currentPage === 1 ? "gray.200" : "yellow.100"}
                border={"2px solid black"}
                mx={1}
                _hover={{ bg: "white" }}
            >
                <FaChevronLeft />
            </Button>

            {getPaginationButtons().map((button, index) => (
                <Button
                    key={index}
                    onClick={() => typeof button === 'number' && onPageChange(button)}
                    bg={currentPage === button ? "yellow.100" : "white"}
                    color={currentPage === button ? "black" : "black"}
                    borderRadius="unset"
                    mx={1}
                    border={"2px solid black"}
                    _hover={{ bg: "yellow.100" }}
                    isDisabled={button === '...'}
                >
                    {button}
                </Button>
            ))}

            <Button
                onClick={() => onPageChange(currentPage + 1)}
                isDisabled={currentPage === totalPagesCount}
                borderRadius="unset"
                bg={currentPage === totalPagesCount ? "gray.200" : "yellow.100"}
                border={"2px solid black"}
                mx={1}
                _hover={{ bg: "white" }}
            >
                <FaChevronRight />
            </Button>
        </Flex>
    );
};

export default Pagination;
