export default function DiaInfoSection( { dia, icone, tempMax, tempMin }: {
    dia: string
    icone: string
    tempMax: string
    tempMin: string
} ) {
    return (
        <div className="p-2 border border-gray-700 flex flex-col items-center rounded-2xl bg-(--cinza-terciario)">
            <p>{dia}</p>
            <p>{icone}</p>
            <p className="text-xl">{tempMax}</p>
            <p className="text-gray-400">{tempMin}</p>
        </div>
    )
}