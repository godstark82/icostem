import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";

const CommitteeMemberGrid = ({ members }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {members.map((member, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow">
                <div className="border-l-4 border-primary pl-4 mb-2 font-semibold text-lg">{member.name}</div>
                <div className="text-gray-700">{member.role}</div>
            </div>
        ))}
    </div>
);

const registrationCommittee = [
    { name: "Ms Mariam Alsalman", role: "CAFS, UTB" },
    { name: "Ms Esra Abdulaziz Ahmed", role: "CAFS, UTB" },
    { name: "Ms Mona Mansoor Ahmed Hammad", role: "CAFS, UTB" },
    { name: "Prof Muhammad Saad", role: "CAFS, UTB" },
    { name: "Ms Noor Abdulla Alawadhi", role: "CAFS, UTB" },
];

const prMarketingCommittee = [
    { name: "Mr Amer Bittar", role: "MarCom, UTB" },
    { name: "Prof Caren Bansolay", role: "CGE, UTB" },
    { name: "Prof Stephen Guansi", role: "CAFS, UTB" },
    { name: "Prof Saubhagyalaxmi Misra", role: "CAFS, UTB" },
    { name: "Mr Husain Mohamed Al Karrani", role: "CAFS, UTB" },
    { name: "Prof Redha Shaker", role: "ACDC, UTB" },
];

const itSupportCommittee = [
    { name: "Mr Rutherford Antipolo", role: "ITC, UTB" },
    { name: "Mr Husain Jaffar", role: "ITC, UTB" },
];

const financialSupportCommittee = [
    { name: "Mr Elson Samuel", role: "Accounts, UTB" },
    { name: "Aditya Paresh Kothari", role: "Accounts, UTB" },
    { name: "Ms Rosemarie Rosales", role: "Procurement, UTB" }
];

const Section = ({ title, members }) => (
    <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-8"></div>
        <CommitteeMemberGrid members={members} />
    </section>
);

export default function OtherCommitteesPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Committees"
                date="14 – 15 October"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <Section title="Registration Committee" members={registrationCommittee} />
                <Section title="PR & Marketing Committee" members={prMarketingCommittee} />
                <Section title="IT Support Committee" members={itSupportCommittee} />
                <Section title="Financial Support & Logistics Committee" members={financialSupportCommittee} />
            </div>
        </div>
    );
}
