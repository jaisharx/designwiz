import { Box, Flex, Button } from '@chakra-ui/react'
import Container from 'components/container'
import NextImage from 'next/image'
import CTAButton from './button'

const btnHoverState = { backgroundColor: 'none', color: 'green.600' }
export default function Navbar() {
  return (
    <Box as="nav" py="6">
      <Container>
        <Flex alignItems="center">
          <Flex mr="auto" w="22%">
            <NextImage
              priority
              alt="Logo"
              src="/assets/logo.png"
              width="400"
              height="100"
              objectFit="cover"
            />
          </Flex>
          <Button variant="ghost" _hover={btnHoverState}>
            Login
          </Button>
          <CTAButton>Get Started</CTAButton>
        </Flex>
      </Container>
    </Box>
  )
}
