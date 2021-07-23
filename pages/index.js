import Head from "next/head";
import Foodies from "./Foodies";

const IndexPage = () => {
    return (
        <div className="w-full">
            <Head>
                <title>Foodies</title>
            </Head>
            <Foodies />
        </div>
    );
};

export default IndexPage;