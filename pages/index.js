import Head from "next/head";
import Foodies from "./home/Foodies";
import FoodiesForm from "./home/FoodiesForm";
import FoodiesInfo from "./home/FoodiesInfo";
import FoodiesMap from "./home/FoodiesMap";
import FoodiesSlide from "./home/FoodiesSlide";

const IndexPage = () => {
    return (
        <div>
            <Head>
                <title>Foodies</title>
            </Head>
            <Foodies />
            <FoodiesInfo />
            <FoodiesMap />
            <FoodiesSlide />
            <FoodiesForm />
        </div>
    );
};

export default IndexPage;