const FoodiesFooter = () => {
    return (
        <div className="space-y-10 mt-34 mb-10">
            <div className="w-full flex flex-row justify-around items-center">
                <div className="w-1/2">
                    <h1 className="font-druk text-2xl text-gray-500 ml-32">Foodies</h1>
                </div>
                <div className="flex flex-row w-1/2 ml-60">
                    <img src="../../images/home/appStoreImg.svg" alt="appStoreImg.svg" className="cursor-pointer" />
                    <span className="w-2"></span>
                    <img src="../../images/home/playStoreImg.svg" alt="playStoreImg.svg" className="cursor-pointer" />
                </div>
            </div>
            <hr className="border-yellow" />
            <div className="w-10/12 -ml-12">
                <ul className="flex flex-row justify-around font-noto text-gray-400 text-sm -space-x-80">
                    <li>Conoce nuestras sucursales</li>
                    <li>Acerca de</li>
                    <li>Conoce nuestras sucursales</li>
                    <li>¿Qué hablan de nosotros?</li>
                    <li>Contáctanos</li>
                </ul>
            </div>
        </div>
    );
};

export default FoodiesFooter;