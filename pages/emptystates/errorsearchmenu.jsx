import Head from "next/head";
import Image from "next/image";
import errorSearchMenuImg from "../../public/images/errorSearchMenu.svg"

const errorSearchMenuScreen = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col space-y-4">
            <Head>
                <title>Error Search Menu - Foodies</title>
            </Head>
            <Image
                src={ errorSearchMenuImg }
                alt="errorSearchMenu.svg"
                width={ 500 }
                height={ 300 }
            />
            <h1 className="font-syne font-bold text-2xl md:text-3xl">¡Platillo no encontrado!</h1>
            <p className="lg:text-3xl lg:px-24 md:px-10 md:text-2xl px-8 text-center text-lg">Te invitamos a que verifiques si el nombre esta bien escrito o prueba buscando un nuevo platillo.</p>
        </div>
    )
};

export default errorSearchMenuScreen;