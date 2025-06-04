import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";

const hotels = [
    {
        name: "InterContinental Bahrain",
        image: "/images/hotels/intercontinental.jpg",
        link: "https://www.ihg.com/intercontinental/hotels/gb/en/manama/bahha/hoteldetail",
        note: "*Select <b>University of Technology Bahrain</b> as Rate Reference.",
    },
    {
        name: "Downtown Rotana",
        image: "/images/hotels/downtown.jpg",
        link: "https://www.rotana.com/rotanahotelandresorts/bahrain/manama/downtownrotana/",
    },
    {
        name: "Ibis",
        image: "/images/hotels/ibis.jpg",
        link: "https://all.accor.com/hotel/6702/index.en.shtml",
        note: "*Prior to booking, email <b><a href='mailto:Vanessa.vaquilar@accor.com'>Vanessa.vaquilar@accor.com</a></b> or <b><a href='https://wa.me/97335358850'>WhatsApp +973 35358850</a></b>",
    },
];

export default function AccommodationOptionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Accommodation Options"
                date="14 – 15 October"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="mb-8 text-lg text-gray-900">
                    <p className="mb-4">
                        We are pleased to offer our accommodation options for delegates attending <b>Sustainable Innovations in Management in the Digital Transformation Era (SIMDTE 2025)</b>, hosted by the <b>University of Technology Bahrain (UTB)</b>.
                    </p>
                    <p className="mb-4">
                        To ensure a comfortable and convenient stay, UTB has partnered with some hotels located within close proximity to the conference venue and UTB. These hotels offer a range of amenities and price points to suit various preferences and budgets.
                    </p>
                    <ul className="list-disc font-bold ml-8 mb-4">
                        <li>Hotels with exclusive rates for SIMDTE 2025 participants</li>
                        <li>Walking distance or short drive to the conference venue</li>
                        <li>Options ranging from budget to premium accommodation</li>
                    </ul>
                    <p>
                        For booking links, rates, and more information, please see the list below.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {hotels.map((hotel, idx) => (
                        <div key={idx} className="flex flex-col items-start bg-white p-4">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded mb-4" />
                            <a
                                href={hotel.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-4 py-2 rounded font-semibold text-lg mb-2 flex items-center gap-2 hover:bg-primary-dark transition"
                            >
                                {hotel.name} <span aria-hidden>🔗</span>
                            </a>
                            {hotel.note && (
                                <div className="text-xs text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: hotel.note }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
