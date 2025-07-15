import SectionImageHeader from "../common/SectionImageHeader";

const SPEAKERS = [
    {
        name: "Dr. Jaya Sinha",
        affiliation: "Engineering College, Greater Noida",
        country: "India",
        img: "https://picsum.photos/200",
    },
    {
        name: "Dr. Nevine Makramlabib Egypt",
        affiliation: "Cairo University",
        country: "Egypt",
        img: "https://picsum.photos/200",
    },
    {
        name: "Prof. Rakesh M Patel",
        affiliation: "Gujrat college of arts and science, Ahmedabad",
        country: "India",
        img: "https://picsum.photos/200",
    },
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
        img: "/images/speakers/prof-dorota2.jpeg",
    },
    {
        name: "Prof Magdalena Rzemieniak",
        affiliation: "Lublin University of Technology",
        country: "Poland",
        img: "/images/speakers/prof-magdelena.jpeg",
    },
];

function SpeakerCard({ speaker }) {
    return (
        <div className="bg-[#232335] rounded-md overflow-hidden shadow-md flex flex-col w-[150px] sm:w-[220px] md:w-[275px]">
            <div className="h-[150px] sm:h-[220px] md:h-[300px] overflow-hidden">
                <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-full h-full "
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                    {SPEAKERS.map((speaker, idx) => (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    ))}
                </div>
            </div>
        </section>
    );
}
