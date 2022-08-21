import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

const CTAButton = styled(Button)`
  color: white;
  background-color: #066756;

  &:hover {
    background-color: #055f4f;
    box-shadow: 0 1px 4px 1px rgb(0 0 0 / 20%);
  }
`

export default CTAButton
