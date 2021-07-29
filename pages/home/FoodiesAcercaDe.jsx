export default function FoodiesAcercaDe () {
    return (
        <div id="acercaDe" className="flex flex-row mt-56 w-full">
            <div className="w-food-art">
                <div className="relative">
                    <img 
                        src="../images/home/theFoodIsOurArt.png"
                        alt="theFoodIsOurArt.png"
                        className="absolute z-0"
                    />
                    <img 
                        src="../images/home/theFoodIsOurArtBg.png"
                        alt="theFoodIsOurArtBg.png"
                        className="absolute z-0"
                    />
                </div>
                <div className="font-druk text-5xl text-right mt-88 mr-10 z-10 relative">
                    <p className="text-white">LA COMIDA ES</p>
                    <p className="text-yellow">NUESTRO ARTE</p>   
                </div>
            </div>
            <div className="w-food-d flex flex-col justify-center -mt-32">
                <div className="relative w-full">
                    <img 
                        src="../images/home/yellowVector.svg" 
                        alt="yellowVector.svg"
                        className="absolute mt-40"
                    />
                </div>
                <div className="mt-40 px-10 space-y-5 z-10">
                    <h2 className="font-syne font-bold text-2xl">¿Quién es Foodies?</h2>
                    <p className="text-gray-500 text-lg">Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco.</p>
                    <button className="font-syne font-bold text-2xl">Contáctanos &nbsp;<img className="inline-block" src="../images/icons/arrow-right.svg" alt="arrow-right.svg" /></button>
                </div>
            </div>
        </div>
    );
};