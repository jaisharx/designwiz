import { Box, Heading, Text, HStack } from '@chakra-ui/react'
import CTAButton from 'components/button'
import Container from 'components/container'
import NextImage from 'next/image'

function Card({ type, oldPrice, price, children }) {
  return (
    <Box
      w="100%"
      p="40px 60px 60px"
      bgColor="white"
      textAlign="center"
      border="1px solid #ccdbd8"
      borderRadius="8px"
    >
      <Text color="#696663" fontSize="18px" fontWeight="500" mb="10px">
        {type}
      </Text>
      <Text textDecoration="line-through" color="#232221" fontSize="18px">
        {oldPrice}
      </Text>
      <Text mt="10px" fontSize="34px" fontWeight="700">
        {price}
      </Text>
      <Text mb="30px" color="#066756">
        Save 20% for life!
      </Text>
      <Box minH="72">
        {children.map((item, idx) => (
          <Text color="#696663" fontSize="22px" mt="10px" key={idx}>
            {item}
          </Text>
        ))}
      </Box>
      <CTAButton>Get started</CTAButton>
    </Box>
  )
}

export default function Pricing() {
  return (
    <Box as="section" py="100px" bgColor="#E6F0EE">
      <Container>
        <Heading fontWeight="medium" fontSize="32px" textAlign="center" mb="6">
          Unlock a more affordable & convenient way <br />
          of getting high-quality design today!
        </Heading>
        <Box mx="auto" w="100px">
          <NextImage
            width="500"
            height="500"
            alt="Lock Icon"
            src="/assets/lock.png"
          />
        </Box>
        <HStack alignItems="stretch" spacing="4" mt="10">
          <Card type="Design" oldPrice="1,799€/mo" price="1,499€/mo">
            {[
              'Unlimited requests',
              'Unlimited revisions',
              'Unlimited brands',
              'Free stock photos',
              'Native source files included',
              'Cancel anytime',
            ]}
          </Card>
          <Card type="Design + Webflow" oldPrice="2,399€/mo" price="1,999€/mo">
            {[
              <Text key="0" as="span" color="#232221" fontWeight="500">
                All the design plan features plus
              </Text>,
              'Front-end development with Webflow',
              'Simple animations',
              'Ongoing maintenance',
            ]}
          </Card>
        </HStack>
      </Container>
    </Box>
  )
}
