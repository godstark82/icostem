import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const reviewCommitteeMembers = [
    { name: "Dr Jayendira Shankar", role: "CAFS, UTB" },
    { name: "Dr Sayed Haytham Alawi", role: "CAFS, UTB" },
    { name: "Dr Hasan Kamel Alaaraj", role: "CAFS, UTB" },
    { name: "Dr Vishwas Chakranarayan", role: "CAFS, UTB" },
    { name: "Dr Surjit Victor", role: "CAFS, UTB" },
    { name: "Dr Gulnar Mulla", role: "CAFS, UTB" },
    { name: "Dr Stephen Chellakan", role: "CAFS, UTB" },
    { name: "Dr Mary Benita Jegan", role: "CAFS, UTB" },
    { name: "Dr Arsalan Najmi", role: "CAFS, UTB" },
    { name: "Dr Redha Shaker", role: "ACDC, UTB" },
    { name: "Dr Sathees Kumar", role: "COE, UTB" },
    { name: "Dr Joy Winston", role: "CCS, UTB" },
    { name: "Dr Priyanka Surendran", role: "AI & MRC, UTB" },
    { name: "Dr Abdul Khadar Jilani", role: "CCS, UTB" },
    { name: "Dr Rajkumar Palaniappan", role: "COE, UTB" },
    { name: "Dr Yogendra Rajoria", role: "KRMU, India" },
    { name: "Dr Chandra Mohan", role: "KRMU, India" },
    {name: "Prof Khamrunissa Hussain", role: "Studies, Jeddah, Saudi Arabia"}
];

export default function ReviewCommitteePage() {
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
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Review Committee</h2>
                <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12"></div>
                <CommitteeMemberGrid members={reviewCommitteeMembers} />
            </section>
        </div>
    );
}
