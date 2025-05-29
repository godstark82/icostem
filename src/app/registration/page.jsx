"use client";

import React from "react";
import AboutHeader from "../../components/common/AboutHeader";

const paymentOptions = [
    { price: "200 USD", label: "In-person Registration" },
    { price: "150 USD", label: "Online Registration" },
    { price: "50 USD", label: "Attending Without Paper" },
    { price: "100 USD", label: "Early Bird Registration" },
];

const PriceCard = ({ price, label }) => {
    return (
        <div className="bg-[#18192A] text-white rounded-lg p-8 flex flex-col items-center shadow">
            <div className="text-3xl font-bold mb-2">{price}</div>
            <div className="text-lg text-center">{label}</div>
        </div>
    );
};

export default function RegistrationPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Registration"
                date="14 - 15 October"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Conference Registration</h1>
                <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-6"></div>
                <div className="text-center text-lg font-medium mb-8">Complete your registration and payment process for the conference</div>
                <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">Payment Information</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
                    {paymentOptions.map((option, idx) => (
                        <PriceCard key={idx} price={option.price} label={option.label} />
                    ))}
                </div>
                <div className="bg-gray-100 border-l-4 border-primary p-4 mb-10 text-sm text-gray-800">
                    <b>Note:</b> Payment is only required after your paper has been accepted. You will receive an email notification regarding the acceptance status of your submission.
                </div>
                <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">Registration Form</div>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="email" placeholder="Email" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Phone" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Affiliation" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Country" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="email" placeholder="Email" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Participant Category" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Days Attending" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Are You Presenting a Paper?" className="border border-gray-300 rounded px-3 py-2 md:col-span-2" required />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition text-lg">Proceed to Payment</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
