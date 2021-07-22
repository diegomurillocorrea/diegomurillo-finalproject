import Head from "next/head";
import Image from "next/image";
import thankYouImg from "../../public/images/emptyStateImages/thankYou.svg";

const thankYouScreen = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col space-y-4 bg-black md:space-y-7">
            <Head>
                <title>Thank You - Foodies</title>
            </Head>
            <Image
                src={ thankYouImg }
                alt="thankYou.svg"
                width={ 300 }
                height={ 100 }
            />
            <div className="md:mr-0 md:w-full w-9/12 mr-5">
                <h1 className="text-white font-druk text-center font-bold text-3xl">Gracias por tus comentarios</h1>
            </div>
            <p className="lg:px-52 md:text-xl md:px-20 text-white text-center font-noto text-lg px-4">Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
            <button className="bg-yellow font-bold font-noto py-3 px-4 rounded">Conoce nuestro menu</button>
        </div>
    );
};

export default thankYouScreen;