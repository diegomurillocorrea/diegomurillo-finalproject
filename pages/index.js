import Head from "next/head";
import Foodies from "./home/Foodies";
import FoodiesInfo from "./home/FoodiesInfo";
import FoodiesMap from "./home/FoodiesMap";

const IndexPage = () => {
    return (
        <div className="w-full">
            <Head>
                <title>Foodies</title>
            </Head>
            <Foodies />
            <FoodiesInfo />
            <FoodiesMap />
        </div>
    );
};

export default IndexPage;