import {
    Text,
    Box,
    Heading,
    HStack,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import Container from 'components/container';
import NextImage from 'next/image';

function List({ children }) {
    return (
        <UnorderedList fontWeight="500" listStyleType="none">
            {children.map((item, idx) => (
                <ListItem fontSize="20px" mt="20px" key={idx}>
                    <HStack align="flex-start">
                        <Box display="inline-block" w="8" mr="2">
                            <NextImage
                                width="64"
                                height="64"
                                alt="Checkmark"
                                src="/assets/list-img.png"
                            />
                        </Box>
                        <Text>{item}</Text>
                    </HStack>
                </ListItem>
            ))}
        </UnorderedList>
    );
}

export default function Services() {
    return (
        <Box as="section" py="100px">
            <Container>
                <Heading fontWeight="medium" textAlign="center" mb="4">
                    Websites, landing pages, apps & more!
                </Heading>
                <HStack>
                    <Box w="110%">
                        <NextImage
                            width="1080"
                            height="1080"
                            alt="Side Image"
                            src="/assets/services.png"
                        />
                    </Box>
                    <Box w="80%" pl="80px">
                        <List>
                            {[
                                'Websites',
                                'Wireframes',
                                'Mobile apps',
                                'UI/UX design',
                                'Banner ads',
                                'Webflow front-end dev',
                                'Landing pages',
                                'and more!',
                            ]}
                        </List>
                    </Box>
                </HStack>
            </Container>
        </Box>
    );
}
