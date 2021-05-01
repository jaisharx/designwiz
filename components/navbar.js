import { Box, Flex, Button } from '@chakra-ui/react';
import Container from 'components/container';
import NextImage from 'next/image';

const btnHoverState = { backgroundColor: 'none', color: 'green.600' };
export default function Navbar() {
    return (
        <Box as="nav" py="6">
            <Container>
                <Flex alignItems="center">
                    <Flex mr="auto" w="22%">
                        <NextImage
                            alt="Logo"
                            src="/assets/logo.png"
                            width="400"
                            height="100"
                            objectFit="cover"
                        />
                    </Flex>
                    <Button variant="ghost" _hover={btnHoverState}>
                        Login
                    </Button>
                    <Button colorScheme="green">Get Started</Button>
                </Flex>
            </Container>
        </Box>
    );
}
