import Head from 'next/head';

import Navbar from 'components/Navbar';
import Header from 'components/Header';
import FeatureSection from 'components/sections/features';

export default function Home() {
    return (
        <>
            <Head>
                <title>designwiz</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar/>      
            <Header/>
            <FeatureSection/>
        </>
    );
}
