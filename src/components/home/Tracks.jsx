import SectionHeader from "../common/SectionHeader";

const TRACKS = [
    "Artificial Intelligence and Soft Computing",
    "Analytics using Machine Learning",
    "Data Analytics",
    "Expert Systems",
    "Fuzzy Systems",
    "Computer Vision",
    "IoT Based Automation",
    "Robotics",
    "Industrial Automation",
    "AI in Healthcare",
    "Algorithms",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Human Resource Management",
    "Stragic Management",
    "Marketing Management",
    "Operations and Supply Chain Management",
    "Pharmacology",
    "Biomedical Science",
    "Agricultural Biotechnology"
];

export default function Tracks() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Themes" />
                {/* Tracks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-24">
                    {TRACKS.map((track, idx) => (
                        <div
                            key={track}
                            className="bg-[#232335] text-white rounded-md px-6 py-6 w-full min-w-[250px] max-w-xs flex items-center text-lg font-medium shadow-md text-left"
                            style={{ minHeight: '90px' }}
                        >
                            {track}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
