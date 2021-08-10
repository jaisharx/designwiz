import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import NextHead from 'components/next-head'
import content from 'lib/seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead
        url={content.url}
        favicon={content.favicon}
        title={content.title}
        desc={content.desc}
        seoImage={content.seoImage}
      />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
