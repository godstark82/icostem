"use client";

import React, { useState } from "react";
import AboutHeader from "../../components/common/AboutHeader";
import { RegistrationSchema } from "../../schema/registration-schema";

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
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        affiliation: "",
        country: "",
        category: "",
        daysAttending: "",
        presentingPaper: false,
        paymentIntentId: "",
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setForm({ ...form, [name]: checked });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handlePayment = () => {
        window.open('https://confpay.utb.edu.bh/', '_blank');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        if (!form.paymentIntentId) {
            setStatus("Please complete the payment first before submitting registration.");
            setLoading(false);
            return;
        }

        try {
            // Validate form data against schema
            const validatedData = RegistrationSchema.parse(form);

            // Send registration data to API
            const response = await fetch("/api/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(validatedData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (response.status === 200) {
                setShowSuccessDialog(true);
            }

            setForm({
                fullName: "",
                email: "",
                phone: "",
                affiliation: "",
                country: "",
                category: "",
                daysAttending: "",
                presentingPaper: false,
                paymentIntentId: "",
            });

        } catch (error) {
            console.error("Registration error:", error);

            if (error instanceof z.ZodError) {
                // Handle validation errors
                const errorMessages = error.errors.map(err =>
                    `${err.path.join('.')}: ${err.message}`
                ).join(', ');
                setStatus(`Validation error: ${errorMessages}`);
            } else if (error instanceof Error) {
                // Handle network or other errors
                setStatus(`Error: ${error.message}`);
            } else {
                setStatus("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

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
                <div className="text-center text-lg font-medium mb-8">Complete your payment and registration process for the conference</div>
                <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">Payment Information</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
                    {paymentOptions.map((option, idx) => (
                        <PriceCard key={idx} price={option.price} label={option.label} />
                    ))}
                </div>
                <div className="flex justify-center mb-8">
                    <button onClick={handlePayment} className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition text-lg">
                        Make Payment
                    </button>
                </div>
                <div className="bg-gray-100 border-l-4 border-primary p-4 mb-10 text-sm text-gray-800">
                    <b>Note:</b> Please complete the payment first and enter the payment ID in the registration form below.
                </div>
                <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">Registration Form</div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="paymentIntentId" value={form.paymentIntentId} onChange={handleChange} placeholder="Payment ID (required)" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" name="affiliation" value={form.affiliation} onChange={handleChange} placeholder="Affiliation" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" name="country" value={form.country} onChange={handleChange} placeholder="Country" className="border border-gray-300 rounded px-3 py-2" required />
                        <select name="category" value={form.category} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2" required>
                            <option value="">Select Category</option>
                            <option value="Student">Student</option>
                            <option value="Faculty">Faculty</option>
                            <option value="Industrial Professional">Industrial Professional</option>
                            <option value="Other">Other</option>
                        </select>
                        <select name="daysAttending" value={form.daysAttending} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2" required>
                            <option value="">Select Days Attending</option>
                            <option value="Day 1">Day 1</option>
                            <option value="Day 2">Day 2</option>
                            <option value="Both Days">Both Days</option>
                        </select>
                        <div className="flex items-center space-x-2 px-3 py-2">
                            <input
                                type="checkbox"
                                name="presentingPaper"
                                checked={form.presentingPaper}
                                onChange={handleChange}
                                className="h-4 w-4"
                            />
                            <label>Will you be presenting a paper?</label>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type="submit" disabled={loading} className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition text-lg">
                            {loading ? "Submitting..." : "Submit Registration"}
                        </button>
                    </div>
                    {status && <div className="text-center text-lg mt-4 text-red-600 font-semibold">{status}</div>}
                </form>
            </div>

            {/* Success Dialog */}
            {showSuccessDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0  bg-opacity-50"></div>
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl border-2 border-primary relative">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">Registration Successful!</h3>
                            <p className="mt-2 text-gray-600">
                                Thank you for registering for the conference. You will receive a confirmation email shortly.
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={() => setShowSuccessDialog(false)}
                                    className="bg-primary text-white font-semibold px-6 py-2 rounded hover:bg-primary-dark transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
