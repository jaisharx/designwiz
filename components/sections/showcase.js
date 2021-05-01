import { Box, Heading, Grid, Image } from '@chakra-ui/react';
import NextImage from 'next/image';

function Container({ children }) {
    return (
        <Box maxW="80%" mx="auto">
            {children}
        </Box>
    );
}

export default function Showcase() {
    return (
        <Box as="section" py="100px" bgColor="#F5F5F4">
            <Container>
                <Heading fontWeight="medium" textAlign="center" mb="6">
                    Recent work
                </Heading>

                <Grid templateColumns="repeat(2, 1fr)" gap="4">
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s1.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s2.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s3.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s4.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s5.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s6.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s7.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s8.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s9.png"
                        alt="Showcase Project"
                    />
                    <NextImage
                        width="1158"
                        height="900"
                        src="/assets/showcase/s10.png"
                        alt="Showcase Project"
                    />
                </Grid>
            </Container>
        </Box>
    );
}
