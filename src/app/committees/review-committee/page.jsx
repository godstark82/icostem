import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const reviewCommitteeMembers = [
    { name: "Prof Jayendira Shankar", role: "CAFS, UTB" },
    { name: "Prof Sayed Haytham Alawi", role: "CAFS, UTB" },
    { name: "Prof Hasan Kamel Alaaraj", role: "CAFS, UTB" },
    { name: "Prof Vishwas Chakranarayan", role: "CAFS, UTB" },
    { name: "Prof Surjit Victor", role: "CAFS, UTB" },
    { name: "Prof Gulnar Mulla", role: "CAFS, UTB" },
    { name: "Prof Stephen Chellakan", role: "CAFS, UTB" },
    { name: "Prof Mary Benita Jegan", role: "CAFS, UTB" },
    { name: "Prof Arsalan Najmi", role: "CAFS, UTB" },
    { name: "Prof Redha Shaker", role: "ACDC, UTB" },
    { name: "Prof Sathees Kumar", role: "COE, UTB" },
    { name: "Prof Joy Winston", role: "CCS, UTB" },
    { name: "Prof Priyanka Surendran", role: "AI & MRC, UTB" },
    { name: "Prof Abdul Khadar Jilani", role: "CCS, UTB" },
    { name: "Prof Rajkumar Palaniappan", role: "COE, UTB" },
    { name: "Prof Yogendra Rajoria", role: "KRMU, India" },
    { name: "Prof Chandra Mohan", role: "KRMU, India" },
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
