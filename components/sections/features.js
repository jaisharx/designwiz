import { Box, Heading, HStack, VStack, Image, Text } from '@chakra-ui/react';
import Container from 'components/container';

export default function Features() {
    return (
        <Box as="section" py="20">
            <Container>
                <Box
                    bgImage="url('/assets/bg-features.png')"
                    h="495px"
                    w="978px"
                    p="80px 120px"
                >
                    <Heading
                        fontSize="4xl"
                        textAlign="center"
                        fontWeight="medium"
                    >
                        How the magic works:
                    </Heading>

                    <HStack mt="16" spacing="12">
                        <VStack w="33%" spacing="4">
                            <Image src="/assets/features/one.png" w="33%" />
                            <Text textAlign="center" color="#696663">
                                Request a design, day or night, via Trello or a
                                slack integration.
                            </Text>
                        </VStack>
                        <VStack w="33%" spacing="4">
                            <Image src="/assets/features/two.png" w="33%" />
                            <Text textAlign="center" color="#696663">
                                Receive your design, per your brand guidelines,
                                within 48hrs on average - 7 days a week.
                            </Text>
                        </VStack>
                        <VStack w="33%" spacing="4">
                            <Image src="/assets/features/three.png" w="33%" />
                            <Text textAlign="center" color="#696663">
                                We’ll revise the design until you are 100%
                                satisfied. Satisfaction is guaranteed!
                            </Text>
                        </VStack>
                    </HStack>
                </Box>
            </Container>
        </Box>
    );
}
