import { Box } from '@chakra-ui/react'

export default function Container({ children }) {
  return (
    <Box maxW="940px" mx="auto">
      {children}
    </Box>
  )
}
