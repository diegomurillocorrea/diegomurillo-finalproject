import Link from "next/link";

export default function FoodiesHeaderCopy () {
    return (
        <div className="w-full">
            {/* NavBar */}
            <nav className="lg:flex lg:py-10 lg:justify-between w-full">
                <div className="lg:w-1/4 lg:flex lg:justify-center lg:items-center">
                    <Link href="./">
                        <a>
                            <span className="font-druk text-2xl">Foodies</span>
                        </a>
                    </Link>
                </div>
                <div className="lg:flex lg:justify-start lg:w-3/4 lg:space-x-9 lg:items-center relative z-10">
                    <Link href="#">
                        <a>
                            <span className="font-syne font-bold text-lg">Acerca de</span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <span className="font-syne font-bold text-lg">Restaurantes</span>
                        </a>
                    </Link>
                    <Link href="./menu/FoodiesMenu">
                        <a>
                            <span className="font-syne font-bold text-lg">Menú</span>
                        </a>
                        </Link>
                    <Link href="#">
                        <a>
                            <span className="font-syne font-bold text-lg z-10">Contáctanos</span>
                        </a>
                    </Link>
                </div>
            </nav>
            {/* Content */}
            <div className="lg:flex w-full">
                {/* Content 1 - Info */}
                <div className="lg:w-1/2 lg:flex lg:flex-col lg:space-y-5 lg:py-32 lg:pl-16">
                    <div>
                        <h1 className="lg:text-6xl font-bold font-druk lg:px-5">Un nuevo sabor esta en la ciudad</h1>
                        <div className="bg-yellow lg:w-4/6 lg:h-14 lg:ml-2 lg:-mt-12"></div>
                    </div>
                    <p className="font-noto lg:text-lg text-gray-400 lg:ml-4 lg:mx-28">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
                    <button className="lg:flex lg:items-center lg:justify-start space-x-2 lg:w-1/4 lg:px-3 lg:ml-1">
                        <span className="font-syne font-bold lg:text-xl">Encuentranos</span>
                        <img src="../images/icons/arrow-right.svg" alt="arrow-right.svg" className="inline-block" />
                    </button>
                </div>
                {/* Content 2 - Img and Bg */}
                <div className="lg:w-1/2 lg:flex">
                    <div className="lg:w-full lg:flex">
                        <img src="../../images/home/hamburgerBg.svg" alt="hamburgerBg.svg" className="hidden lg:block w-hamburger-bg lg:absolute lg:-mt-32 lg:-ml-14"/>
                        <img src="../../images/home/hamburgerBgTablet.svg" alt="hamburgerBgTablet.svg" className="hidden md:absolute lg:w-1/4" />
                        <img src="../../images/home/hamburger.png" alt="hamburger.png" className="lg:absolute lg:w-2/5 lg:ml-16 lg:mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
