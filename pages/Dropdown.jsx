import { useState } from "react";
import Link from "next/link";

function NavBar () {
    const [ open, isOpen ] = useState( true );
    return(
        <nav className="flex flex-row justify-around mt-11 relative z-10">  
            <div className="w-1/4 flex justify-center">
                <Link href="./">
                    <a className="font-druk lg:text-2xl">Foodies</a>
                </Link>
            </div>
            <div className="flex flex-row lg:justify-start lg:w-3/4 font-bold text-lg mt-1">
                <Link href="#">
                    <a className="font-syne -ml-5 mx-5">Acerca de</a>
                </Link>
                <Link href="#">
                    <a className="font-syne mx-5">Restaurantes</a>
                </Link>
                <Link href="./menu/FoodiesMenu">
                    <a className="font-syne mx-5">Menú</a>
                </Link>
                <Link href="#">
                    <a className="font-syne mx-5">Contáctanos</a>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;