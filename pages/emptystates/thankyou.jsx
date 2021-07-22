import Head from "next/head";
import Image from "next/image";
import thankYouImg from "../../public/images/thankYou.svg";

const thankYouScreen = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col space-y-4 bg-black">
            <Head>
                <title>Thank You - Foodies</title>
            </Head>
            <Image
                src={ thankYouImg }
                alt="thankYou.svg"
                width={ 300 }
                height={ 100 }
            />
            <div className="px-32">
                <h1 className="text-white font-druk text-center font-bold text-2xl">Gracias por tus comentarios</h1>
            </div>
            <p className="text-white text-center font-noto text-lg px-4">Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
            <button className="bg-yellow font-bold font-noto p-3 rounded">Conoce nuestro menu</button>
        </div>
    );
};

export default thankYouScreen;