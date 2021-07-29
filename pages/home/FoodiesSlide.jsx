export default function FoodiesSlide () {
    return (
        <div className="flex flex-row w-full mt-10 mb-5">

            <div className="w-1/4">
                <div className="w-full mb-10">
                    <img src="../../images/home/ketchupBg1.svg" alt="ketchupBg1.svg" />
                </div>
            </div>

            <div className="w-2/4 flex flex-col justify-center items-center space-y-5">
                <h1 className="font-druk text-3xl text-center">
                    &quot;El mejor lugar para degustar en familia y amigos!&quot;
                </h1>
                <p className="font-noto text-gray-500 text-center mx-24">
                    Es el mejor lugar al que he venido con  mi familia, la comida
                    es rica, sirven y te atienden de la mejor manera.
                </p>
                <div>
                    <button className="mr-5">
                        <img src="../../images/icons/left-arrow.svg" alt="left-arrow.svg" className="inline-block" />
                    </button>
                    <p className="font-syne inline-block text-lg text-gray-600 font-bold">
                        1 / 5
                    </p>
                    <button className="ml-5">
                        <img src="../../images/icons/right-arrow.svg" alt="right-arrow.svg" className="inline-block" />
                    </button>
                </div>
            </div>

            <div className="w-1/4 flex">
                <div className="w-full flex flex-row justify-end">
                    <img src="../../images/home/ketchupBg2.svg" alt="ketchupBg2.svg" className="absolute mt-20" />
                    <img src="../../images/home/ketchupBottle.png" alt="ketchupBottle.png" className="absolute -mt-10" />
                </div>
            </div>
        </div>
    );
};