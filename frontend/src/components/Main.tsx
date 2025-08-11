import { FaLocationArrow } from "react-icons/fa6";
import ClimaSection from "./ClimaSection";
import { useState } from "react";
import DiaInfoSection from "./DiaInfoSection";

export default function Main() {

    const [open, setOpen] = useState(false);

    const dadosCincoDias: {
        dia: string
        icone: string
        tempMax: string
        tempMin: string
    }[] = []

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <main className="flex flex-col gap-10 p-8 m-6 border border-gray-500 rounded-xl bg-(--fundo-secundario) shadow">
            <header className="flex justify-between">
                <div>
                    <h1>Weather App</h1>
                    <p className="text-xl text-gray-400 font-light">com Geolocalização</p>
                </div>
                <div className="bg-[#252728] rounded-full w-12 h-12 flex items-center justify-center mt-4">
                    <FaLocationArrow className="text-(--laranja) text-2xl" />
                </div>
            </header>

            <ClimaSection cidade="São Paulo" temperatura="26°" clima="Nublado" />

            <button
                onClick={handleOpen}
                className="p-5 bg-(--laranja) text-2xl rounded-2xl text-black cursor-pointer"
            >
                Ver previsão de 5 dias
            </button>

            {open && dadosCincoDias.length > 0 && (
                <section className="border-t border-gray-500 pt-8 grid grid-cols-5 gap-1">
                    {dadosCincoDias.map((dados, index) => (
                        <DiaInfoSection
                            key={index}
                            dia={dados.dia}
                            icone={dados.icone}
                            tempMax={dados.tempMax}
                            tempMin={dados.tempMin}
                        />
                    ))}
                </section>
            )}
        </main>
    )
}