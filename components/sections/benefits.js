import { Box, Heading, Grid, Image, Text, VStack } from '@chakra-ui/react';
import Container from 'components/container';
import NextImage from 'next/image';

function Card({ imageSrc, title, desc }) {
    return (
        <VStack alignItems="flex-start">
            <Box w="24%">
                <NextImage
                    width="120"
                    height="120"
                    objectFit="scale-down"
                    alt="Benefits Types"
                    src={`/assets/benefits/${imageSrc}`}
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
                        title="Speedy delivery"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="money.png"
                        title="Fixed monthly price"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="top.png"
                        title="Top-grade quality"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="scale.png"
                        title="Flexible to scale"
                        desc="Make as many design requests or revisions as you wish."
                    />
                    <Card
                        imageSrc="unique.png"
                        title="Unique and yours"
                        desc="Make as many design requests or revisions as you wish."
                    />
                </Grid>
            </Container>
        </Box>
    );
}
