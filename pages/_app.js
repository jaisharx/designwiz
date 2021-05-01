import { ChakraProvider } from '@chakra-ui/react';
import NextHead from 'components/next-head';
import content from 'lib/seo';

function MyApp({ Component, pageProps }) {
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
    );
}

export default MyApp;
