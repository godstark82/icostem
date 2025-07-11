"use client"
import React, { useState } from "react";
import AboutHeader from "../../components/common/AboutHeader";

// Email templates
const successEmailTemplate = (name, title) => `Dear ${name},

Thank you for submitting your paper "${title}" to SIMDTE 2025.

Your submission has been received and will be reviewed by our committee. You will be notified of the review outcome by September 15, 2025.

Best regards,
SIMDTE 2025 Committee`;

const guidelines = [
    {
        label: "Manuscript Format: MS Word, following the ",
        linkText: "SIMDTE 2025 Template",
        link: "/downloads/template.docx",
    },
    {
        label: "Submission System: ",
        linkText: "Upload Paper Portal.",
        link: "#submit-paper",
        target: "_self",
    },
    {
        label: "Review Process: Double-blind peer review",
    },
    {
        label: "Abstract Submission Deadline: 15 July 2025",
    },
];

export default function UploadPaperPage() {
    const [form, setForm] = useState({
        paperTitle: "",
        paperAbstract: "",
        paperKeywords: "",
        paperDocumentType: "",
        paperTopic: "",
        authors: [{
            name: "",
            affiliation: "",
            email: "",
            isCorresponding: false
        }],
        uploadedFile: null,
        uploaderName: "",
        uploaderEmail: "",
        uploaderAffiliation: "",
        uploaderCountry: "",
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === "file") {
            setForm({ ...form, uploadedFile: e.target.files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleAuthorChange = (index, field, value) => {
        setForm(prev => {
            const newAuthors = [...prev.authors];
            newAuthors[index] = { ...newAuthors[index], [field]: value };
            return { ...prev, authors: newAuthors };
        });
    };

    const addAuthor = () => {
        if (form.authors.length < 4) {
            setForm(prev => ({
                ...prev,
                authors: [...prev.authors, { name: "", affiliation: "", email: "", isCorresponding: false }]
            }));
        }
    };

    const removeAuthor = (index) => {
        setForm(prev => ({
            ...prev,
            authors: prev.authors.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const formData = new FormData();
            formData.append("paperTitle", form.paperTitle);
            formData.append("paperAbstract", form.paperAbstract);
            formData.append("paperKeywords", form.paperKeywords);
            formData.append("paperDocumentType", form.paperDocumentType);
            formData.append("paperTopic", form.paperTopic);
            formData.append("authors", JSON.stringify(form.authors));
            formData.append("uploadedFile", form.uploadedFile);
            formData.append("uploaderName", form.uploaderName);
            formData.append("uploaderEmail", form.uploaderEmail);
            formData.append("uploaderAffiliation", form.uploaderAffiliation);
            formData.append("uploaderCountry", form.uploaderCountry);

            const res = await fetch("/api/paper-upload", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to upload paper');
            }

            // Send success email
            await fetch('/api/mailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: form.uploaderEmail,
                    subject: "Paper Submission Successful - SIMDTE 2025",
                    text: successEmailTemplate(form.uploaderName, form.paperTitle)
                })
            });

            setShowModal(true);
            setStatus("Paper submitted successfully!");
            setForm({
                paperTitle: "",
                paperAbstract: "",
                paperKeywords: "",
                paperDocumentType: "",
                paperTopic: "",
                authors: [{
                    name: "",
                    affiliation: "",
                    email: "",
                    isCorresponding: false
                }],
                uploadedFile: null,
                uploaderName: "",
                uploaderEmail: "",
                uploaderAffiliation: "",
                uploaderCountry: "",
            });
        } catch (error) {
            console.error('Upload error:', error);
            setStatus(`Submission failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

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
                <div className="flex justify-center gap-4 mb-4">
                    <img src="/images/scopus-logo-hero.png" alt="Scopus" className="h-12 object-contain" />
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
                                    <a href={g.link} className="text-primary underline ml-1" target={g.target || "_blank"} rel="noopener noreferrer">{g.linkText}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                    <p className="mb-2">Authors of accepted papers will receive an official acceptance letter via email not later than 15 September 2025. The presented papers will be published in Scopus-indexed journals by Taylor & Francis.</p>
                    <p className="mb-2">To confirm inclusion in the proceedings, authors must complete registration and payment via the Payment Link upon acceptance.</p>
                    <p>Non-paper attendees can proceed to the payment link to register.</p>
                </div>
                <div className="flex justify-center gap-4 mb-4">
                    <img src="/images/cope.jpg" alt="COPE" className="h-20 object-contain" />
                </div>
                <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">COPE Guidelines</div>
                <div className="mb-8 text-gray-900">
                    <h2 className="font-semibold mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        The Sustainable Innovations in Management in the Digital Transformation Era (SIMDTE 2025) is committed to upholding the highest standards of publication ethics. We adhere to the principles outlined by the Committee on Publication Ethics (COPE) to ensure the integrity of academic work presented and published through our platform.
                    </p>

                    <h2 className="font-semibold mb-4">2. Responsibilities of Authors</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Originality: Submissions must be original and not under consideration elsewhere.</li>
                        <li>Plagiarism: All manuscripts will be screened for plagiarism. Any form of plagiarism will result in rejection.</li>
                        <li>Authorship: All listed authors must have made significant contributions to the research.</li>
                        <li>Disclosure: Authors must disclose any conflicts of interest or funding sources.</li>
                        <li>Corrections: Authors are obliged to promptly notify the editors of any errors discovered post-submission or post-publication.</li>
                    </ul>

                    <h2 className="font-semibold mb-4">3. Responsibilities of Reviewers</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Confidentiality: Manuscripts under review must be treated as confidential.</li>
                        <li>Objectivity: Reviews should be conducted objectively, with clear and constructive feedback.</li>
                        <li>Conflict of Interest: Reviewers must disclose any potential conflicts of interest and recuse themselves if necessary.</li>
                        <li>Timeliness: Reviewers should complete reviews within the agreed timeframe.</li>
                    </ul>

                    <h2 className="font-semibold mb-4">4. Responsibilities of Editors</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Fairness: Editorial decisions will be made without regard to race, gender, sexual orientation, religious belief, or political philosophy.</li>
                        <li>Confidentiality: Editors must protect the confidentiality of all submitted manuscripts.</li>
                        <li>Integrity: Editors will take reasonable steps to identify and prevent the publication of papers where research misconduct has occurred.</li>
                        <li>Corrections and Retractions: Editors will issue corrections or retractions when necessary.</li>
                    </ul>

                    <h2 className="font-semibold mb-4">5. Misconduct Handling</h2>
                    <p className="mb-4">All allegations of misconduct will be taken seriously and investigated in accordance with COPE's flowcharts and best practices. This includes:</p>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Fabrication or falsification of data</li>
                        <li>Plagiarism</li>
                        <li>Duplicate publication</li>
                        <li>Undisclosed conflicts of interest</li>
                    </ul>

                    <h2 className="font-semibold mb-4">6. Retraction Policy</h2>
                    <p className="mb-4">Articles may be retracted if:</p>
                    <ul className="list-disc ml-8 mb-4">
                        <li>There is clear evidence of unreliable findings</li>
                        <li>Findings have been previously published elsewhere without proper crossreferencing</li>
                        <li>It constitutes plagiarism or unethical research</li>
                    </ul>

                    <h2 className="font-semibold mb-4">7. Appeals and Complaints</h2>
                    <p>Authors have the right to appeal editorial decisions. Complaints regarding ethical issues will be handled in accordance with COPE guidelines.</p>
                </div>
                <div id="submit-paper" className="bg-primary text-white text-center text-xl font-bold py-3 mb-8 rounded">Submit Your Paper
                    <div className="text-sm font-normal mt-1">Fill out the form below to submit your paper for review.</div>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="text" name="paperTitle" value={form.paperTitle} onChange={handleChange} placeholder="Paper Title" className="border border-gray-300 rounded px-3 h-10 w-full" required />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="uploaderName" value={form.uploaderName} onChange={handleChange} placeholder="Uploader's Full Name" className="border border-gray-300 rounded px-3 h-10" required />
                        <input type="email" name="uploaderEmail" value={form.uploaderEmail} onChange={handleChange} placeholder="Uploader's Email" className="border border-gray-300 rounded px-3 h-10" required />
                        <input type="text" name="uploaderAffiliation" value={form.uploaderAffiliation} onChange={handleChange} placeholder="Uploader's Affiliation" className="border border-gray-300 rounded px-3 h-10" required />
                        <input type="text" name="uploaderCountry" value={form.uploaderCountry} onChange={handleChange} placeholder="Uploader's Country" className="border border-gray-300 rounded px-3 h-10" required />
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Upload Paper (PDF)</label>
                            <input
                                type="file"
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-3 h-10"
                                accept="application/pdf"
                                required
                            />
                        </div>
                        <input type="text" name="paperDocumentType" value={form.paperDocumentType} onChange={handleChange} placeholder="Document Type" className="border border-gray-300 rounded px-3 h-10 md:col-span-2" required />
                        <textarea name="paperAbstract" value={form.paperAbstract} onChange={handleChange} placeholder="Abstract" className="border border-gray-300 rounded px-3 py-2 md:col-span-2 min-h-[120px]" required />
                        <input type="text" name="paperKeywords" value={form.paperKeywords} onChange={handleChange} placeholder="Keywords" className="border border-gray-300 rounded px-3 h-10 md:col-span-2" required />
                        <input type="text" name="paperTopic" value={form.paperTopic} onChange={handleChange} placeholder="Topic" className="border border-gray-300 rounded px-3 h-10 md:col-span-2" required />
                    </div>
                    <div className="flex flex-col gap-4">
                        {form.authors.map((author, index) => (
                            <div key={index} className="flex flex-col gap-2 p-4 border rounded">
                                <div className="grid grid-cols-3 gap-2">
                                    <input
                                        type="text"
                                        value={author.name}
                                        onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
                                        placeholder="Author's Name"
                                        className="border border-gray-300 rounded px-3 h-10"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={author.affiliation}
                                        onChange={(e) => handleAuthorChange(index, 'affiliation', e.target.value)}
                                        placeholder="Affiliation"
                                        className="border border-gray-300 rounded px-3 h-10"
                                        required
                                    />
                                    <input
                                        type="email"
                                        value={author.email}
                                        onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                                        placeholder="Email"
                                        className="border border-gray-300 rounded px-3 h-10"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={author.isCorresponding}
                                            onChange={(e) => handleAuthorChange(index, 'isCorresponding', e.target.checked)}
                                            className="accent-primary"
                                        />
                                        <label className="text-sm">Corresponding author</label>
                                    </div>
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            onClick={() => removeAuthor(index)}
                                            className="text-red-500 text-sm hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {form.authors.length < 4 && (
                            <button
                                type="button"
                                onClick={addAuthor}
                                className="bg-gray-200 text-gray-800 rounded px-3 py-1 text-sm font-medium w-fit hover:bg-gray-300"
                            >
                                Add Another Author
                            </button>
                        )}
                        <div className="text-xs text-gray-500">4 authors maximum.</div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type="submit" disabled={loading} className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition text-lg">
                            {loading ? "Submitting..." : "Submit Paper"}
                        </button>
                    </div>
                    {status && <div className="text-center text-lg mt-4 text-primary font-semibold">{status}</div>}
                </form>
            </div>
            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
                        <div className="bg-primary text-white text-center text-xl font-bold py-3 mb-6 rounded">
                            CONFIRMATION OF SUBMISSION
                        </div>
                        <div className="text-center mb-6">
                            <h2 className="text-lg font-bold mb-2">Thank You for Your Submission</h2>
                            <p className="mb-2">
                                Your paper has been successfully submitted to Sustainable Innovations in Management in the Digital Transformation Era (SIMDTE 2025), hosted by the University of Technology Bahrain (UTB).
                            </p>
                            <p className="mb-2">
                                We appreciate your contribution and look forward to reviewing your work.<br />
                                Notifications of acceptance will be sent via email no later than 15 September 2025.
                            </p>
                            <p className="mb-4">
                                Please proceed with your conference registration and payment by clicking the link below:
                            </p>
                            <a
                                href="/payment-link"
                                className="inline-block bg-primary text-white px-6 py-3 rounded font-bold text-lg mb-2"
                            >
                                Proceed to Payment
                            </a>
                            <div className="text-sm text-gray-600 mt-2">Stay tuned for updates.</div>
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
