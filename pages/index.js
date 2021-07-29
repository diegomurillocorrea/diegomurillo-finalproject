import Head from "next/head";
import FoodiesHeader from "./home/FoodiesHeader";
import FoodiesAcercaDe from "./home/FoodiesAcercaDe";
import FoodiesRestaurantes from "./home/FoodiesRestaurantes";
import FoodiesSlide from "./home/FoodiesSlide";
import FoodiesContactanos from "./home/FoodiesContactanos";
import FoodiesApp from "./home/FoodiesApp";
import FoodiesFooter from "./home/FoodiesFooter";

const HeadTitle = () => <Head><title>Foodies</title></Head>

export default function IndexPage () {
    return (
        <div>
            <HeadTitle />
            <FoodiesHeader />
            <FoodiesAcercaDe />
            <FoodiesRestaurantes />
            <FoodiesSlide />
            <FoodiesContactanos />
            <FoodiesApp />
            <FoodiesFooter />
        </div>
    );
};