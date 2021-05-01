import { Badge, Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import NextImage from 'next/image';
import CTAButton from './button';

function SocialBrandIcon({ src }) {
    return (
        <Box w="36">
            <NextImage
                width="300"
                height="100"
                alt="Trusted Brands"
                src={`/assets/social/${src}.png`}
            />
        </Box>
    );
}

function SocialProof() {
    return (
        <Box mt="44">
            <Text textAlign="center" color="#d6c0a7">
                Trusted by these amazing brands
            </Text>
            <HStack spacing="16" mt="3">
                <SocialBrandIcon src="1" />
                <SocialBrandIcon src="2" />
                <SocialBrandIcon src="3" />
                <SocialBrandIcon src="4" />
                <SocialBrandIcon src="5" />
            </HStack>
        </Box>
    );
}

export default function Header() {
    return (
        <Box
            as="header"
            bgGradient="linear-gradient(180deg, #fff, #fce8d1)"
            py="12"
        >
            <Container>
                <Flex alignItems="center">
                    <Box>
                        <HStack>
                            <Badge
                                colorScheme="yellow"
                                variant="solid"
                                p="6px 10px"
                                borderRadius="4"
                            >
                                NEW!
                            </Badge>
                            <Text color="yellow.600">
                                Unlimited front-end development with Webflow
                            </Text>
                        </HStack>
                        <Heading as="h1" py="4" fontSize="42px">
                            Delightful high-quality design. Reliable and
                            affordable.
                        </Heading>
                        <Text fontSize="20px">
                            Unlimited design requests to grow your business
                        </Text>
                        <CTAButton mt="6" colorScheme="green" size="lg">
                            Get Started
                        </CTAButton>
                    </Box>

                    <Box w="98%">
                        <NextImage
                            width="1076"
                            height="1080"
                            alt="Hero Image"
                            src="/assets/rocket.png"
                        />
                    </Box>
                </Flex>

                <SocialProof />
            </Container>
        </Box>
    );
}
