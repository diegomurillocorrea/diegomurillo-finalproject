import Head from "next/head";
import Foodies from "./home/Foodies";
import FoodiesInfo from "./home/FoodiesInfo";

const IndexPage = () => {
    return (
        <div className="w-full">
            <Head>
                <title>Foodies</title>
            </Head>
            <Foodies />
            <FoodiesInfo />
        </div>
    );
};

export default IndexPage;