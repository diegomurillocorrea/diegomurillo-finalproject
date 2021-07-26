const FoodiesForm = () => {
    return (
        <div className="w-full flex flex-col bg-black py-20 -mt-10">
            <div className="flex flex-col items-center space-y-5">
                <h1 className="font-druk text-3xl text-white">Cuentanos tu experiencia</h1>
                <p className="font-noto text-xl text-white px-85 text-center">Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
            </div>
            <form>
                <div className="flex flex-row justify-center mt-7">
                    <div className="flex flex-col mr-10 space-y-3">
                        <label htmlFor="nameAndLastname" className="font-noto text-xs text-yellow flex flex-col">
                            Nombre y apellido
                            <input type="text" id="nameAndLastname" placeholder="John Doe" className="px-5 py-3 border-2 rounded border-yellow placeholder-yellow text-base bg-transparent mt-2" />
                        </label>
                        <label htmlFor="email" className="font-noto text-xs text-gray-400 flex flex-col">
                            Correo electrónico
                            <input type="email" id="email" placeholder="j.doe@correo.com" className="px-5 py-3 border-2 rounded text-base bg-transparent mt-2 border-gray-400" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="mesagge" className="font-noto text-xs text-gray-400 flex flex-col">
                            Mensaje
                            <textarea id="message" cols="70" rows="5" placeholder="El día de ahora mi experiencia fue..." className="font-noto border-2 border-gray-400 text-base bg-transparent rounded mt-2 p-3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="px-72 flex flex-row justify-end -mr-12 mt-5">
                    <input type="submit" value="Enviar comentarios" className="px-5 py-3 rounded bg-yellow font-noto font-bold" />
                </div>
            </form>
        </div>
    );
};

export default FoodiesForm;