import Link from "next/link";

const Foodies = () => {
    return (
        <div className="w-full">
            <div className="lg:flex lg:justify-end lg:absolute lg:-mt-0 w-full">
                <img src="../../images/home/hamburgerBg.svg" alt="hamburgerBg.svg" className="w-hamburger-bg md:h-96 lg:h-auto lg:-mt-12 hidden lg:block md:mt-5" />
                <img src="../../images/home/hamburgerBgTablet.svg" alt="hamburgerBgTablet.svg" className="w-hamburger-bg md:-mt-5 md:ml-96 lg:hidden md:block md:absolute" />
            </div>
            <div className="flex justify-end absolute w-full lg:-ml-20 lg:mt-20 md:mt-32 z-0">
                <img src="../../images/home/hamburger.png" alt="hamburger.png" className="w-hamburger" />
            </div>
            <nav className="flex flex-row justify-around lg:mt-11 md:mt-5 relative z-10">  
                <div className="w-1/4 flex justify-center">
                    <Link href="./">
                        <a className="font-druk text-2xl hover:underline">Foodies</a>
                    </Link>
                </div>
                <div className="flex flex-row justify-start w-3/4 font-bold text-lg mt-1">
                    <Link href="#acercaDe">
                        <a className="font-syne -ml-5 mx-5">Acerca de</a>
                    </Link>
                    <Link href="#restaurantes">
                        <a className="font-syne mx-5">Restaurantes</a>
                    </Link>
                    <Link href="./menu/FoodiesMenu">
                        <a className="font-syne mx-5">Menú</a>
                    </Link>
                    <Link href="#contactanos">
                        <a className="font-syne mx-5">Contáctanos</a>
                    </Link>
                </div>
            </nav>
            <div className="flex flex-col lg:mt-40 items-start lg:w-2/4 md:w-1/2 lg:px-12 md:px-10 lg:ml-10 md:mt-32">
                <h1 className="font-druk font-bold lg:text-6xl md:text-4xl z-10">Un nuevo sabor esta en la ciudad</h1>
                <span className="bg-yellow lg:w-4/6 md:w-full lg:h-14 md:h-10 lg:-ml-2 md:-ml-1 lg:-mt-12 md:-mt-10 lg:mb-5"></span>
                <p className="font-noto lg:text-lg md:text-base md:pr-12 md:pt-4 lg:pr-20 text-gray-400 mb-10">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
                <button className="font-syne font-bold md:text-lg md:-mt-5 lg:text-2xl z-10">Encuentranos &nbsp;<img className="inline-block" src="../images/icons/arrow-right.svg" alt="arrow-right.svg" /></button>
            </div>
        </div>
    );
};

export default Foodies;