export default function FoodiesContactanos () {
    return (
        <div id="contactanos" className="w-full flex flex-col bg-black py-20 -mt-10">
            <div className="flex flex-col items-center space-y-5">
                <h1 className="font-druk text-3xl text-white">Cuentanos tu experiencia</h1>
                <p className="font-noto text-xl text-white px-85 text-center">Don&apos;t miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
            </div>
            <form>
                <div className="flex flex-row justify-center mt-7">
                    <div className="flex flex-col mr-10 space-y-3">
                        <label htmlFor="nameAndLastname" className="font-noto text-xs text-yellow-600 flex flex-col w-72">
                            Nombre y apellido
                            <input type="text" id="nameAndLastname" placeholder="John Doe" className="w-full px-5 py-3 border-2 rounded border-yellow-600 placeholder-yellow-600 text-base bg-transparent mt-2" />
                        </label>
                        <label htmlFor="email" className="font-noto text-xs text-gray-400 flex flex-col">
                            Correo electrónico
                            <input type="email" id="email" placeholder="j.doe@correo.com" className="w-full px-5 py-3 border-2 rounded text-base bg-transparent mt-2 border-gray-400" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="mesagge" className="font-noto text-xs text-gray-400 flex flex-col">
                            Mensaje
                            <textarea id="message" cols="62" rows="5" placeholder="El día de ahora mi experiencia fue..." className="font-noto border-2 border-gray-400 text-base bg-transparent rounded mt-2 p-3"></textarea>
                        </label>
                    </div>
                </div>
                <div className="flex flex-row justify-end mt-5 mx-60 transform hover:translate-y-1 transition duration-300">
                    <input type="submit" value="Enviar comentarios" className="hover:bg-yellow-300 transition duration-300 cursor-pointer px-5 py-3 rounded bg-yellow font-noto font-bold" />
                </div>
            </form>
        </div>
    );
};