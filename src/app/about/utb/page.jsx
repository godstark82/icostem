import AboutHeader from '../../../components/common/AboutHeader';
import SectionHeader from '../../../components/common/SectionHeader';

export default function AboutUTBPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="University Profile" date="14 - 15 October" image='/images/simdte-white-lg.png' overlayColor='#d0224a' bgImage='/images/utb-images/gallery/gallery-1.jpg'  />
            <div className="container mx-auto px-4 py-16">
            <SectionHeader title="University of Technology Bahrain (UTB)" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg">
                        <p>
                            The University of Technology Bahrain (UTB), established in 2002, stands among the Kingdom's leading private universities, recognised for its unwavering commitment to academic excellence, innovation, and international engagement.
                        </p>
                        <p>
                            With a strong portfolio of globally recognised programmes in business, engineering, and technology, UTB equips its students with industry-relevant skills and a future-ready mindset essential for succeeding in today's dynamic global landscape.
                        </p>
                        <div className="font-extrabold text-2xl md:text-3xl text-secondary mt-8 mb-2">
                            DISCOVER YOUR FUTURE AT UTB - WHERE INNOVATION DRIVES EXCELLENCE AND OPPORTUNITY KNOWS NO BORDERS.
                        </div>
                        <p>
                            UTB holds the distinction of being the first private university in Bahrain to earn accreditation from the prestigious Accreditation Board for Engineering and Technology (ABET). Further institutional recognition includes accreditations from the European Council for Business Education (ECBE), the Chartered Institute of Marketing (CIM), and the Association of Chartered Certified Accountants (ACCA). UTB is also officially recognised by the Ministry of Education in Saudi Arabia and the Ministry of Higher Education and Scientific Research in Jordan, broadening global academic and career pathways for its graduates.
                        </p>
                        <p>
                            Home to a multicultural student community representing over 55 nationalities, UTB fosters a diverse and inclusive academic environment. The university maintains strategic collaborations with leading universities and industry partners across the United Kingdom, United States, France, United Arab Emirates, India, and Brazil, enhancing both the academic experience and professional exposure of its students.
                        </p>
                        <p>
                            UTB's modern campus features cutting-edge facilities and an industry-driven curriculum that blends academic quality with practical application. This approach ensures graduates are not only academically proficient but also workplace-ready. Recent developments include the ongoing completion of an Olympic-standard aquatic centre, positioning UTB as a premier destination for international student-athletes and providing premium amenities for both recreation and residential experiences.
                        </p>
                        <p>
                            As the organising university of this international conference, UTB proudly extends its vision of innovation and excellence to the global academic community. We welcome delegates, scholars, and professionals to connect, collaborate, and contribute to the advancement of knowledge and practice.
                        </p>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="/images/UTB-Campus.jpg"
                            alt="UTB Reception Desk"
                            className="shadow-lg w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
