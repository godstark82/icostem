import AboutHeader from '../../../components/common/AboutHeader';
import SectionHeader from '../../../components/common/SectionHeader';

export default function AboutUniversityPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="College Profile" date="5 - 7 September" image='/images/simdte-white-lg.png' overlayColor='#d0224a' bgImage='/images/utb-images/gallery/gallery-1.jpg'  />
            <div className="container mx-auto px-4 py-16">
            <SectionHeader title="Arya College, Jaipur" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg">
                        <p>
                        All India Arya Samajis Society for higher & Technical Education conceptualized the establishment of ARYA group of colleges in the year 1999. Under the aegis of this society ARYA COLLEGE of Engineering. & I.T. became functional from 2000. This premier center of learning, an embodiment of the vision and zeal of the reputed Agarwal family, is committed to facilitate high quality technical education in Rajasthan (India). The group also believes in creating an academic environment that boasts of rigorous work culture with excellent teaching system.
                        </p>
                        <p>
                        THE PINK CITY OF INDIA Jaipur, the capital of Rajasthan, is one of the rare examples of 18 century town built after careful planning. It was established by Maharaja Sawai Jai Singh in the year 1727. Jaipur is predominantly known for its musicians, artisans and craftsmen. There are innumerable sagas and stories of the culture, traditions and practices associated with the city of Jaipur. This diverse land of rich culture and heritage is a royal treat for tourists from all over the world. Some of the most popular tourist destinations in Jaipur include: Hawa Mahal - the palace of winds, Amber Fort – capital of erstwhile Jaipur state, Jantar Mantar - the largest working observatory, City Palace - the residence of erstwhile Maharaja of Jaipur, Nahargarh Fort - the hunting residence of erstwhile Maharajas and Jaigarh Fort. Jaipur is located approximately 270 km south of Delhi and 250 km west of Agra and is well connected to other parts of the country through air, rail and road transport.
                        </p>
                        {/* <div className="font-extrabold text-2xl md:text-3xl text-secondary mt-8 mb-2">
                            DISCOVER YOUR FUTURE AT Arya College, Jaipur - WHERE INNOVATION DRIVES EXCELLENCE AND OPPORTUNITY KNOWS NO BORDERS.
                        </div> */}
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="/images/arya-images/gallery-1.webp"
                            alt="Arya College, Jaipur"
                            className="shadow-lg w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
