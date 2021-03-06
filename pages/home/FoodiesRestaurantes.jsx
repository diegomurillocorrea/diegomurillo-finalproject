import GoogleMaps from "./Map";

const info = {
    place: "Sucursal San Benito",
    schedule: "Abierto de 12:00 m.d. - 9:00 p.m.",
    address: "Calle la Reforma #543, Colonia San Benito"
};

const NormalMapCard = () => {
    return (
        <div className="pl-5 pr-44 py-3 border border-gray-500 rounded-md">
            <h1 className="font-syne font-bold text-xl">{ info.place }</h1>
            <p className="font-noto">{ info.schedule }</p>
            <p className="font-noto">{ info.address }</p>
        </div>
    );
};

const SelectedMapCard = () => {
    return (
        <div className="bg-yellow-200 pl-5 pr-44 py-3 rounded-md mt-2">
            <h1 className="font-syne font-bold text-xl">{ info.place }</h1>
            <p className="font-noto">{ info.schedule }</p>
            <p className="font-noto">{ info.address }</p>
        </div>
    );
};

export default function FoodiesMap () {
    return (
        <div id="restaurantes" className="flex flex-row w-full mt-36">
            <div className="w-input flex flex-col">
                <h1 className="font-druk text-4xl text-center px-5 pb-7">Estamos para ti</h1>
                <div className="flex flex-row">
                    <button className="font-syne w-1/2 bg-black text-white p-4 text-2xl">
                        <img src="../../images/icons/food.png" alt="food.png" className="inline-block mb-1 mr-5" />
                        Para llevar
                    </button>
                    <button className="font-syne w-1/2 p-4 text-2xl font-bold  border-t border-b border-gray-300">
                        <img src="../../images/icons/truck.svg" alt="truck.svg" className="inline-block mb-1 mr-5" />
                        Domicilio
                    </button>
                </div>
                <div className="flex flex-row justify-center w-full p-3 border-b border-gray-300">
                    <img src="../../images/icons/search.svg" alt="search.svg" className="ml-16" />
                    <input type="search" placeholder="Buscar nombre o direcci??n" className="ml-5 w-full text-base font-noto font-extralight" />
                </div>
                <div className="flex flex-col items-end mr-5 space-y-2">
                    <SelectedMapCard />
                    <NormalMapCard />
                    <NormalMapCard />
                </div>
            </div>
            <div className="w-map">
                <GoogleMaps />
            </div>
        </div>
    );
};