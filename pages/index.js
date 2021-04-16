import Head from 'next/head';

import Navbar from 'components/navbar';
import Header from 'components/header';
import Features from 'components/sections/features';
import Benefits from 'components/sections/benefits';

export default function Home() {
    return (
        <>
            <Head>
                <title>designwiz</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar/>
            <Header/>
            <Features/>
            <Benefits/>
        </>
    );
}
