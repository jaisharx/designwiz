import Head from 'next/head';

import Navbar from 'components/navbar';
import Header from 'components/header';
import FeatureSection from 'components/sections/features';
import BenefitSection from 'components/sections/benefits';

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
            <BenefitSection/>
        </>
    );
}
