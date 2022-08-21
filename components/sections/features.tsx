import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react'
import Container from 'components/container'
import NextImage from 'next/image'

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
          <Heading fontSize="4xl" textAlign="center" fontWeight="medium">
            How the magic works:
          </Heading>

          <HStack mt="16" spacing="12">
            <VStack w="100%" spacing="4">
              <Box w="33%">
                <NextImage
                  width="122"
                  height="122"
                  alt="Number One"
                  src="/assets/features/one.png"
                />
              </Box>
              <Text textAlign="center" color="#696663">
                Request a design, day or night, via Trello or a slack
                integration.
              </Text>
            </VStack>
            <VStack w="100%" spacing="4">
              <Box w="33%">
                <NextImage
                  width="122"
                  height="122"
                  alt="Number Two"
                  src="/assets/features/two.png"
                />
              </Box>
              <Text textAlign="center" color="#696663">
                Receive your design, per your brand guidelines, within 48hrs on
                average - 7 days a week.
              </Text>
            </VStack>
            <VStack w="100%" spacing="4">
              <Box w="33%">
                <NextImage
                  width="122"
                  height="122"
                  alt="Number Three"
                  src="/assets/features/three.png"
                />
              </Box>
              <Text textAlign="center" color="#696663">
                We’ll revise the design until you are 100% satisfied.
                Satisfaction is guaranteed!
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
