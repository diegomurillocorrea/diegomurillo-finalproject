import Link from "next/link";
import { TailwindNavbar } from "tailwind-navbar-react";

export default function Dropdown () {
    const links = [
        {
            name: "Acerca de",
            link: "#"
        },
        {
            name: "Restaurantes",
            link: "#"
        },
        {
            name: "Menú",
            link: "./menu/FoodiesMenu"
        },
        {
            name: "Contáctanos",
            link: "#"
        }
        ];
    
        return (
        <>
            <TailwindNavbar
                brand={ <h1 className="font-druk text-2xl text-black">Foodies</h1> }
                className="py-10 bg-white"
            >
            <nav>
                <ul className="items-center justify-between pt-4 lg:flex lg:pt-0 text-black">
                {
                    links.map( link => {
                        return (
                        <li>
                            <Link href={ link.link }>
                                <a className="block px-0 py-3 lg:p-3 transition-all duration-200 font-syne font-bold text-lg">
                                {link.name}
                                </a>
                            </Link>
                        </li>
                        );
                    } )
                }
                </ul>
            </nav>
            </TailwindNavbar>
        </>
    );
};