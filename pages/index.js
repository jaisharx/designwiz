import Navbar from 'components/Navbar';
import HeroSection from 'components/HeroSection';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>designwiz</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar/>      
            <HeroSection/>
        </>
    );
}
