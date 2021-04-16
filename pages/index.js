import Navbar from 'components/Navbar';
import HeroSection from 'components/HeroSection';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>      
            <HeroSection/>
        </>
    );
}
