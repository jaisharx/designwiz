import {
    Box,
    Heading,
    HStack,
    Text,
    Image,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import Container from 'components/container';

function List({ children }) {
    return (
        <UnorderedList fontWeight="500" listStyleType="none">
            {children.map((item, idx) => (
                <ListItem fontSize="20px" mt="20px" key={idx}>
                    <Image
                        src="/assets/list-img.png"
                        display="inline-block"
                        w="8"
                        mr="2"
                    />
                    {item}
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
                        <Image src="/assets/services.png" />
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
                                'and more!'
                            ]}
                        </List>
                    </Box>
                </HStack>
            </Container>
        </Box>
    );
}
