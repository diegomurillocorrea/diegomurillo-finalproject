import Head from "next/head";
import Link from "next/link";
import FoodiesFooter from "../home/FoodiesFooter";
import menu from "../api/menu";
import categories from "../api/categories";

const FoodiesMenuHead = () => {
    return (
        <Head>
            <title>Foodies - Menu</title>
        </Head>
    );  
};

/* const dataFullMenu = menu;
const dataFullCategories = categories; */

export default function FoodiesMenu ( /* { dataFullMenu, dataFullCategories } */ ) {
    return (
        <div>
            <FoodiesMenuHead />
            <div className="w-full bg-black pb-30">
                <div className="flex justify-end absolute w-full">
                    <img src="../../images/menu/menuHamburgerBg.svg" alt="menuHamburgerBg.svg" className="w-5/12" />
                </div>
                <div className="flex justify-end absolute w-full -ml-20 mt-36 z-0">
                    <img src="../../images/menu/menuHamburger.png" alt="menuHamburger.png" className="w-5/12 -mr-5" />
                </div>
                <nav className="flex flex-row justify-around pt-11 relative z-10 text-white">  
                    <div className="w-1/4 flex justify-center">
                        <Link href="../">
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
                        <div className="flex flex-col">
                            <Link href="./FoodiesMenu">
                                <a className="font-syne mx-5 z-10">Menú</a>
                            </Link>
                            <span className="w-16 h-2 absolute ml-3 mt-4 bg-yellow"></span>
                        </div>
                        <Link href="#">
                            <a className="font-syne mx-5">Contáctanos</a>
                        </Link>
                    </div>
                </nav>
                <div className="flex flex-col mt-40 items-start w-2/4 px-12 ml-10">
                    <h1 className="font-druk text-white font-bold text-6xl">Cada sabor es una nueva</h1>
                    <h1 className="font-druk font-bold text-6xl z-10">experiencia</h1>
                    <span className="bg-yellow w-11/12 h-14 -ml-3 -mt-12 mb-5"></span>
                </div>
            </div>
            <div>
                <div className="mt-16 flex flex-row items-center">
                    <div className="flex flex-row justify-center ml-14 w-2/6 p-3 border border-gray-300 rounded-lg">
                        <img src="../../images/icons/search.svg" alt="search.svg" className="ml-2" />
                        <input type="search" placeholder="Buscar nombre o dirección" className="ml-5 w-full text-base font-noto font-extralight" />
                    </div>
                    <ul className="flex flex-row space-x-10 font-syne font-bold text-lg ml-10">
                        <div className="flex flex-col">
                            <li className="z-10">
                                Todas
                            </li>
                            <span className="w-16 h-2 absolute -ml-2 mt-3 bg-yellow"></span>
                        </div>
                        {/* {
                            .map( ( { id, name } ) => {
                                return (
                                    <>
                                        <li key={ id }>
                                            { name }
                                        </li>
                                    </>
                                );
                            } )
                        } */}
                    </ul>
                </div>
            </div>
            <div className="w-full mt-16 px-14 grid grid-cols-4 gap-4">
                {/* { .map( ( { id, name, image, description, price, category } ) => {
                    return (
                        <div className="w-full rounded-lg m-2" key={ id }>
                            <div>
                                <img src={ image } key={ id } alt={ image } className="rounded-lg" />
                            </div>
                            <div className="p-5 space-y-3">
                                <div>
                                    <h1 className="font-syne text-xl font-bold mb-5">{ name }</h1>
                                    <p className="text-lg leading-tight font-medium">{ description }</p>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-lg text-gray-400">{ category }</p>
                                    <div className="text-sm font-druk font-bold bg-yellow px-3 rounded-lg">${ price }</div>
                                </div>
                            </div>
                        </div>
                        ) 
                    } ) } */}
            </div>
            <div className="m-20 flex flex-row justify-center space-x-2">
                <button className="bg-black text-yellow border font-bold border-black px-4 py-2 rounded-md">1</button>
                <button className="font-noto font-bold border border-gray-400 px-4 py-2 rounded-md">2</button>
                <button className="font-noto font-bold border border-gray-400 px-4 py-2 rounded-md">3</button>
                <button className="font-noto font-bold border border-gray-400 px-4 py-2 rounded-md">4</button>
                <button className="font-noto font-bold px-8 py-2 bg-yellow-200 rounded-md">Siguiente</button>
            </div>
            <FoodiesFooter />
        </div>
    );
};