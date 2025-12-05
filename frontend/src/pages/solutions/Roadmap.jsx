
const roadmap = [
    "Real-time AQI grid monitoring in all major cities",
    "100% transition to clean public transport (CNG, EV, hydrogen)",
    "Heavy industries relocation outside city boundaries",
    "Strict construction dust control laws",
    "Massive city plantation and green buffer zones",
    "ULEZ in all metro cities",
    "Incentives for rooftop solar in all households",
];


export default function Roadmap() {
    return (
        <>

            <section className="mt-16 bg-gray-100 p-8 rounded-2xl border shadow transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer">
                <h2 className="text-2xl font-bold mb-6">Proposed Air Quality Roadmap</h2>

                <div className="relative border-l border-gray-400 ">
                    {roadmap.map((step, i) => (
                        <div key={i} className="ml-6 mb-6">
                            <div className="w-3 h-3 bg-blue-500 rounded-full absolute -left-1.5 mt-1.5"></div>
                            <p className="text-gray-700 text-lg">{step}</p>
                        </div>
                    ))}
                </div>
            </section>


        </>
    );
}