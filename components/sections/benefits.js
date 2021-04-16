import { Box, Heading, Grid, Image, Text, VStack } from '@chakra-ui/react';
import Container from 'components/Container';

function Card({ imageSrc, title, desc }) {
    return (
        <VStack alignItems="flex-start">
            <Box w="24%" h="67">
                <Image
                    src={`/assets/benefits/${imageSrc}`}
                    alt="benefits types"
                />
            </Box>
            <Heading fontSize="2xl" fontWeight="medium" my="4">
                {title}
            </Heading>
            <Text color="#696663">{desc}</Text>
        </VStack>
    );
}

export default function Benefits() {
    return (
        <Box as="section" pb="100px">
            <Container>
                <Heading fontWeight="medium" textAlign="center" mb="16">
                    Benefits
                </Heading>
                <Grid gap="12" templateColumns="repeat(3, 1fr)">
                    <Card
                        imageSrc="unlimted.png"
                        title="Unlimited requests"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="speed.png"
                        title="Unlimited requests"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="money.png"
                        title="Unlimited requests"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="top.png"
                        title="Unlimited requests"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="scale.png"
                        title="Unlimited requests"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="unique.png"
                        title="Unlimited requests"
                        desc="Make as many design requests or revisions as you wish."
                    />
                </Grid>
            </Container>
        </Box>
    );
}
