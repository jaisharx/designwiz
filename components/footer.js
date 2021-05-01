import { Box, HStack, Image, Text, Link } from '@chakra-ui/react';
import NextImage from 'next/image';

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
            <Box w="14%" mx="auto">
                <NextImage
                    width="400"
                    height="100"
                    alt="Designwiz Logo"
                    src="/assets/logo.png"
                />
            </Box>
            <Text mt="6">
                Unlimited monthly design requests for your business to run
                smoothly...
            </Text>
            <Text mt="6">... so you can put your feet up and relax :)</Text>
            <Box w="20%" mx="auto">
                <NextImage
                    width="728"
                    height="726"
                    alt="Relax Footer Image"
                    src="/assets/relax.png"
                />
            </Box>
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
