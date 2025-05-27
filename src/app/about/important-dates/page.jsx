import AboutHeader from '../../../components/common/AboutHeader';


export default function ImportantDates() {
    return (
        <div className="bg-white">
            <AboutHeader title="Important Dates" date="14 - 15 October" image='/images/simdte-dark-lg.png' overlayColor='#1f1f33' bgImage='/images/calendar-imp-dates.png' dividerColor='white' />
            <div className="container mx-auto px-4 py-16">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-separate border-spacing-0 rounded-lg overflow-hidden shadow-md">
                        <thead>
                            <tr>
                                <th className="bg-[#d0224a] text-white text-left px-6 py-3 text-lg font-semibold rounded-tl-lg">Event</th>
                                <th className="bg-[#d0224a] text-white text-left px-6 py-3 text-lg font-semibold rounded-tr-lg">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-t border-[#d0224a]/30">
                                <td className="px-6 py-4">Abstract Submission Deadline</td>
                                <td className="px-6 py-4">15 July 2025</td>
                            </tr>
                            <tr className="bg-gray-50 border-t border-[#d0224a]/30">
                                <td className="px-6 py-4">Last Day of Early Bird Registration</td>
                                <td className="px-6 py-4">15 July 2025</td>
                            </tr>
                            <tr className="bg-white border-t border-[#d0224a]/30">
                                <td className="px-6 py-4">Full Paper Submission Deadline</td>
                                <td className="px-6 py-4">20 August 2025</td>
                            </tr>
                            <tr className="bg-gray-50 border-t border-[#d0224a]/30">
                                <td className="px-6 py-4">Notification of Acceptance</td>
                                <td className="px-6 py-4">15 September 2025</td>
                            </tr>
                            <tr className="bg-white border-t border-[#d0224a]/30">
                                <td className="px-6 py-4">In-person Conference Day</td>
                                <td className="px-6 py-4">14 October 2025</td>
                            </tr>
                            <tr className="bg-gray-50 border-t border-[#d0224a]/30">
                                <td className="px-6 py-4">Online Conference Day</td>
                                <td className="px-6 py-4">15 October 2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
