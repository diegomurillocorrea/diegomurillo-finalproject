const Circle = props => {
    return <div className="rounded-full bg-yellow text-white text-center font-bold font-noto p-1">{ props.number }</div>
};

export default function FoodiesApp () {
    return (
        <div className="w-full flex flex-col mb-40">
            <div className="w-full flex flex-row">
                <div className="w-2/5">
                    <img src="../../images/home/phone.png" alt="phone.png" className="absolute -mt-28 w-4/6 ml-10" />
                </div>
                <div className="w-3/5 flex flex-col items-starts mt-20 -ml-6">
                    <div className="flex flex-col items-center -ml-20">
                        <h1 className="font-druk text-3xl text-center z-10">Obtén más beneficios</h1>
                        <h1 className="font-druk text-3xl text-center z-10">Descarga nuestra App</h1>
                        <div className="w-footer h-12 bg-yellow -mt-10 transform -rotate-1"></div>
                    </div>
                    <div className="-ml-20 flex flex-row justify-center">
                        <div className="mt-12 flex flex-row justify-center absolute">
                            <img src="../../images/home/leftVector.svg" alt="leftVector.svg" />
                            <span className="w-10"></span>
                            <img src="../../images/home/rightVector.svg" alt="rightVector.svg" />
                        </div>
                        <div className="flex flex-row flex-wrap mt-10">
                            <div className="flex flex-col items-center w-5/12 space-y-3 z-10 ml-20">
                                <div className="w-8">
                                    <Circle number="01" />
                                </div>
                                <h2 className="font-noto font-black text-lg">Solicita rápido</h2>
                                <p className="font-noto text-sm font-medium text-center mx-12">Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                            </div>
                            <div className="flex flex-col items-center w-5/12 space-y-3 z-10 -ml-4">
                                <div className="w-8">
                                    <Circle number="02" />
                                </div>
                                <h2 className="font-noto font-black text-lg">Fácil de Usar</h2>
                                <p className="font-noto text-sm font-medium text-center mx-14">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 z-10 mt-20 -ml-10">
                                <div className="w-8">
                                    <Circle number="03" />
                                </div>
                                <h2 className="font-noto font-black text-lg">Promociones especiales</h2>
                                <p className="font-noto text-sm font-medium text-center mx-80 px-1">Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};