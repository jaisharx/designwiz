import { Box, HStack, Image, Text, Link } from '@chakra-ui/react';

function FooterLink({ children }) {
    return (
        <Link
            color="#066756"
            fontSize="18px"
            fontWeight="700"
            textDecoration="underline"
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <Box as="footer" pt="60px" pb="20px" textAlign="center">
            <Image src="/assets/logo.png" w="14%" mx="auto" />
            <Text mt="6">
                Unlimited monthly design requests for your business to run
                smoothly...
            </Text>
            <Text mt="6">... so you can put your feet up and relax :)</Text>
            <Image src="/assets/relax.png" w="20%" mx="auto" />
            <HStack justifyContent="space-between" w="50%" mx="auto">
                <FooterLink>Schedule a call</FooterLink>
                <FooterLink> Join our referral program</FooterLink>
                <FooterLink>Contact us</FooterLink>
            </HStack>
            <Box w="80%" mx="auto" my="6" borderTop="1px solid #e4e2e0">
                <Text color="#69666" fontSize="12px" pt="4">
                    @Copyright 2021 · Designwiz
                </Text>
            </Box>
        </Box>
    );
}
