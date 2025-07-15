import SectionHeader from "../common/SectionHeader";

const TRACKS = [
    "Artificial Intelligence and Soft Computing",
    "Artificial Intelligence and Pattern Recognition",
    "Multimedia Analytics using Machine Learning",
    "Data Analytics",
    "Big Data Analytics",
    "Expert Systems",
    "Fuzzy Systems",
    "Computer Vision",
    "Biometrics",
    "IoT Based Automation",
    "Embedded System",
    "Robotics",
    "Industrial Automation over IoT",
    "Healthcare Automation using ML & DL",
    "Wireless Sensor Networks",
    "Mobile Applications",
    "Algorithms",
    "Image Processing",
    "Computer Vision",
    "Programming Environments",
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
