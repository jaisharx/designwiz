import { Box, Flex, Button, Image } from '@chakra-ui/react';
import Container from 'components/container';

const btnHoverState = { backgroundColor: 'none', color: 'green.600' };
export default function Navbar() {
    return (
        <Box as="nav" py="6">
            <Container>
                <Flex alignItems="center">
                    <Image src="/assets/logo.png" mr="auto" w="22%" />
                    <Button variant="ghost" _hover={btnHoverState}>
                        Login
                    </Button>
                    <Button colorScheme="green">Get Started</Button>
                </Flex>
            </Container>
        </Box>
    );
}
