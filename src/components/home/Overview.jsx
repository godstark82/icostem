import SectionHeader from "../common/SectionHeader";

const CHAIRS = [
    {
        name: 'DR HAITHAM ALQAHTANI',
        title: 'Executive Conference Chair',
        img: '/images/haitham.jpg', // Replace with actual image path
    },
    {
        name: 'DR SHABANA FAIZAL',
        title: 'Conference Chair',
        img: '/images/shabana.jpg', // Replace with actual image path
    },
];

export default function Overview() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Conference Overview" />
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Overview Text */}
                    <div className="md:w-2/3 text-gray-800 text-justify space-y-4">
                        <p>
                            The second edition of the International Conference on Sustainable Innovations in Management in the Digital Transformation Era (SIMDTE), organised by the College of Administrative and Financial Sciences at the University of Technology Bahrain (UTB), will focus on advancing creative thinking in management and informatics within the context of digital business transformation. Anchored in the goals of Bahrain Vision 2030, the conference seeks to address contemporary business and technological challenges through rigorous academic dialogue and research-driven inquiry.
                        </p>
                        <p>
                        Bringing together scholars, practitioners, and industry leaders, the conference will serve as a platform for the exchange of knowledge, the presentation of innovative ideas, and the exploration of forward-thinking solutions through engaging panel and keynote discussions.
                        </p>
                        <p>
                            This dynamic gathering aims to spark intellectual curiosity, drive impactful research, and cultivate meaningful collaborations that contribute to sustainable progress in business and technology.
                        </p>
                    </div>
                    {/* Chairs */}
                    <div className="md:w-1/3">
                        <div className="flex flex-row gap-4 justify-center">
                            {CHAIRS.map((chair, idx) => (
                                <div key={chair.name} className="flex flex-col items-start bg-light p-4 w-48">
                                    <img
                                        src={chair.img}
                                        alt={chair.name}
                                        className="w-full h-48 sm:h-56 md:h-48 object-cover rounded-md mb-2"
                                    />
                                    <div className="w-12 h-2 bg-primary mb-2"></div>
                                    <div className="text-secondary font-bold text-sm leading-tight">{chair.name}</div>
                                    <div className="text-xs text-gray-700">{chair.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
