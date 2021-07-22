import Head from "next/head";
import Image from "next/image";
import errorSearchImg from "../../public/images/errorSearch.svg";

const ErrorSearchScreen = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col">
            <Head>
                <title>Error Search - Foodies</title>
            </Head>
            <Image
                src={ errorSearchImg }
                alt="errorSearch.svg"
                width={ 500 }
                height={ 300 }
            />
            <p className="font-bold text-center font-syne md:text-3xl md:w-2/4 lg:mt-8 lg:text-4xl lg:w-2/5 mt-5 text-2xl w-11/12">¡No hemos encontrado lo que buscas!</p>
        </div>
    );
};

export default ErrorSearchScreen;