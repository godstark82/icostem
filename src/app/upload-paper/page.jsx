"use client"
import React from "react";
import AboutHeader from "../../components/common/AboutHeader";

const guidelines = [
    {
        label: "Manuscript Format: MS Word, following the ",
        linkText: "SIMDTE 2025 Template",
        link: "/downloads/manuscript-template.docx",
    },
    {
        label: "Submission System: ",
        linkText: "Upload Paper Portal.",
        link: "#",
    },
    {
        label: "Review Process: Double-blind peer review",
    },
    {
        label: "Abstract Submission Deadline: 15 July 2025",
    },
];

export default function UploadPaperPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Upload Paper"
                date="14 – 15 October"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="flex justify-center mb-4">
                    <img src="/images/scopus.png" alt="Scopus" className="h-12 object-contain" />
                </div>
                <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">Submission Guidelines</div>
                <div className="mb-8 text-gray-900">
                    <p className="mb-4">
                        Authors are invited to submit original, unpublished research papers aligned with the tracks of Sustainable Innovations in Management in the Digital Transformation Era (SIMDTE 2025). Submissions must adhere to the following:
                    </p>
                    <ul className="list-disc ml-8 mb-4">
                        {guidelines.map((g, idx) => (
                            <li key={idx} className="mb-2">
                                {g.label}
                                {g.link && (
                                    <a href={g.link} className="text-primary underline ml-1" target="_blank" rel="noopener noreferrer">{g.linkText}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                    <p className="mb-2">Authors of accepted papers will receive an official acceptance letter via email not later than 15 September 2025. The presented papers will be published in Scopus-indexed journals by Taylor & Francis.</p>
                    <p className="mb-2">To confirm inclusion in the proceedings, authors must complete registration and payment via the Payment Link upon acceptance.</p>
                    <p>Non-paper attendees can proceed to the payment link to register.</p>
                </div>
                <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">Submit Your Paper
                    <div className="text-sm font-normal mt-1">Fill out the form below to submit your paper for review.</div>
                </div>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Academic Title" className="border border-gray-300 rounded px-3 py-2" required />
                        <div className="flex flex-col gap-2">
                            <div className="grid grid-cols-3 gap-2">
                                <input type="text" placeholder="Authors Name" className="border border-gray-300 rounded px-3 py-2" />
                                <input type="text" placeholder="Affiliation" className="border border-gray-300 rounded px-3 py-2" />
                                <input type="email" placeholder="Email" className="border border-gray-300 rounded px-3 py-2" />
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <input type="checkbox" id="corresponding" className="accent-primary" />
                                <label htmlFor="corresponding" className="text-sm">Corresponding author</label>
                            </div>
                            <button type="button" className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-sm font-medium w-fit mt-1">Add Another Author</button>
                            <div className="text-xs text-gray-500">4 authors maximum.</div>
                        </div>
                        <input type="text" placeholder="Full Name" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="email" placeholder="Email" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Affiliation" className="border border-gray-300 rounded px-3 py-2" required />
                        <input type="text" placeholder="Research Title" className="border border-gray-300 rounded px-3 py-2" required />
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
                            <input type="file" className="border border-gray-300 rounded px-3 py-2" accept="application/pdf" multiple />
                        </div>
                        <div className="flex gap-4 md:col-span-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-primary" /> Abstract
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-primary" /> Full Paper
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-primary" /> Presentation
                            </label>
                        </div>
                        <input type="text" placeholder="Document Type" className="border border-gray-300 rounded px-3 py-2 md:col-span-2" />
                        <textarea placeholder="Abstract" className="border border-gray-300 rounded px-3 py-2 md:col-span-2 min-h-[80px]" />
                        <input type="text" placeholder="Keywords" className="border border-gray-300 rounded px-3 py-2 md:col-span-2" />
                        <input type="text" placeholder="Topic" className="border border-gray-300 rounded px-3 py-2 md:col-span-2" />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition text-lg">Submit Paper</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
