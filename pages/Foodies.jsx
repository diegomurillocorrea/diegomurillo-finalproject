import Link from "next/link";

const Foodies = () => {
    return (
        <div className="w-full">
            <div className="flex justify-end absolute -mt-12 w-full">
                <img src="../images/home/hamburgerBg.svg" className="w-hamburger-bg" />
            </div>
            <div className="flex justify-end absolute w-full -ml-20 mt-26 z-0">
                <img src="../images/home/hamburger.png" className="w-hamburger" />
            </div>
            <nav className="flex flex-row justify-around mt-11 relative z-10">  
                <div className="w-1/4 flex justify-center">
                    <Link href="./">
                        <a className="font-druk text-2xl">Foodies</a>
                    </Link>
                </div>
                <div className="flex flex-row justify-items-start w-3/4 font-bold text-lg mt-1">
                    <Link href="#">
                        <a className="font-syne -ml-5 mx-5">Acerca de</a>
                    </Link>
                    <Link href="#">
                        <a className="font-syne mx-5">Restaurantes</a>
                    </Link>
                    <Link href="./menu">
                        <a className="font-syne mx-5">Menú</a>
                    </Link>
                    <Link href="#">
                        <a className="font-syne mx-5">Contáctanos</a>
                    </Link>
                </div>
            </nav>
            <div className="flex flex-col mt-40 items-start w-2/4 px-12 ml-10">
                <h1 className="font-druk font-bold text-6xl z-10">Un nuevo sabor esta en la ciudad</h1>
                <span className="bg-yellow w-span h-14 -ml-3 -mt-12 mb-5"></span>
                <p className="font-noto text-lg pr-24 text-gray-400 mb-10">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
                <button className="font-syne font-bold text-2xl">Encuentranos &nbsp;<img className="inline-block" src="../images/icons/arrow-right.svg" alt="arrow-right.svg" /></button>
            </div>
        </div>
    );
};

export default Foodies;