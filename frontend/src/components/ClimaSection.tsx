import { MdSunny } from "react-icons/md";

export default function ClimaSection({cidade, temperatura, clima}: {
    cidade: string
    temperatura: string
    clima: string
}) {
    return (
        <section className="flex justify-between">
            <div className="flex flex-col gap-1">
                <h2>{cidade}</h2>
                <p id="temperatura" className="text-(--laranja) font-bold">{temperatura}</p>
                <p className="text-2xl">{clima}</p>
            </div>

            <MdSunny className="text-(--laranja) text-7xl mt-4" />
        </section>
    )
}