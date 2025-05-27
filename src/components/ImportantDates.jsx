import SectionHeader from "../components/common/SectionHeader";
import SectionImageHeader from "../components/common/SectionImageHeader";
const DATES = [
    { day: "15", month: "July", desc: "Abstract Submission Deadline" },
    { day: "15", month: "July", desc: "Last Day of Early Bird Registration" },
    { day: "20", month: "August", desc: "Full Paper Submission Deadline" },
    { day: "15", month: "September", desc: "Notification of Acceptance" },
    { day: "14", month: "October", desc: "In-person Conference Day" },
    { day: "15", month: "October", desc: "Online Conference Day" },
];

export default function ImportantDates() {
    return (
        <section className="bg-white">
            {/* Top background image with overlay and header */}
            <SectionImageHeader title="Important Dates" image="/images/imp-dates.jpg" />
            {/* Dates Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
                    {DATES.map((date, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="bg-primary text-white rounded-t-md rounded-b-none px-4 py-4 text-center relative w-28">
                                <div className="text-3xl font-bold leading-none">{date.day}</div>
                                <div className="text-base font-medium text-center mt-1">{date.month}</div>
                                <div className="absolute left-0 bottom-0 w-full h-1 bg-white" style={{ transform: 'translateY(50%)' }}></div>
                            </div>
                            <div className="h-2 w-28 bg-primary"> </div>
                            <div className="bg-white w-28 text-center px-2 pt-6 pb-2 text-black font-medium min-h-[56px]">
                                {date.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
