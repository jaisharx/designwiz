import {
    Badge,
    Box,
    Flex,
    Heading,
    HStack,
    Text,
    Image,
    Button,
} from '@chakra-ui/react';
import Container from 'components/container';

function SocialProof() {
    return (
        <Box mt="44">
            <Text textAlign="center" color="#d6c0a7">Trusted by these amazing brands</Text>
            <HStack spacing="16" mt="3">
                <Image src="/assets/social/1.png" w="36"/>
                <Image src="/assets/social/2.png" w="36"/>
                <Image src="/assets/social/3.png" w="36"/>
                <Image src="/assets/social/4.png" w="36"/>
                <Image src="/assets/social/5.png" w="36"/>
            </HStack>
        </Box>
    );
}

export default function HeroSection() {
    return (
        <Box as="header" bgGradient="linear-gradient(180deg, #fff, #fce8d1)" py="12">
            <Container>
                <Flex alignItems="center">
                    <Box>
                        <HStack>
                            <Badge colorScheme="yellow" variant="solid" p="6px 10px" borderRadius="4">
                                NEW!
                            </Badge>
                            <Text color="yellow.600">
                                Unlimited front-end development with Webflow
                            </Text>
                        </HStack>
                        <Heading as="h1" py="3" fontSize="42px">
                            Delightful high-quality design. Reliable and
                            affordable.
                        </Heading>
                        <Text fontSize="20px">
                            Unlimited design requests to grow your business
                        </Text>
                        <Button mt="3" colorScheme="green">
                            Get Started
                        </Button>
                    </Box>

                    <Box w="80%">
                        <Image src="/assets/rocket.png" alt="Hero Image"/>
                    </Box>
                </Flex>

                <SocialProof />
            </Container>
        </Box>
    );
}
