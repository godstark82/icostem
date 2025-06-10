import SectionImageHeader from "../common/SectionImageHeader";

const SPEAKERS = [
    {
        name: "Prof Anna Dunay",
        affiliation: "John Von Neumann University",
        country: "Hungary",
        img: "/images/speakers/prof-anna-dunay.jpeg",
    },
    {
        name: "Prof Dorota Jelonek",
        affiliation: "Czestochowa University of Technology",
        country: "Poland",
        img: "/images/speakers/prof-dorota.jpeg",
    },
    {
        name: "Prof Magdalena Rzemieniak",
        affiliation: "Lublin University of Technology",
        country: "Poland",
        img: "/images/speakers/prof-magdelena.jpeg"
    },
    {
        name: "Prof Narendra Kumar",
        affiliation: "NIET, NIMS University, Jaipur",
        country: "India",
        img: "/images/speakers/prof-narendra.jpeg",
    },
];

function SpeakerCard({ speaker }) {
    return (
        <div className="bg-[#232335] rounded-md overflow-hidden shadow-md flex flex-col w-[150px] sm:w-[220px] md:w-[275px]">
            <div className="h-[150px] sm:h-[220px] md:h-[275px]">
                <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-[#232335] text-white p-3">
                <div className="h-1.5 w-12 bg-primary my-1.5"></div>
                <div className="font-semibold text-sm md:text-base leading-tight mb-1">{speaker.name}</div>
                <div className="text-xs opacity-90 leading-tight whitespace-normal">{speaker.affiliation}</div>
                <div className="text-xs opacity-70 leading-tight whitespace-normal">{speaker.country}</div>
            </div>
        </div>
    );
}

export default function KeynoteSpeakers() {
    return (
        <section className="bg-white">
            <SectionImageHeader title="Keynote Speakers" image="/images/speakers-bg.jpg" />
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                    {SPEAKERS.map((speaker, idx) => (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    ))}
                </div>
            </div>
        </section>
    );
}
