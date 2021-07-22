import Head from "next/head";
import '../styles/globals.css';

function MyApp( { Component, pageProps } ) {
    return ( 
        <div>
            <Head>
                <link 
                    rel="shortcut icon" 
                    href="/favicon.svg" 
                    type="image/x-icon"
                />
            </Head>
            <Component { ...pageProps } />
        </div>
    );
};

export default MyApp;