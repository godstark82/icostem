import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const executiveChairs = [
    { name: "Prof Haitham Alqahtani", role: "Vice President, Academic Affairs, UTB" },
    { name: "Prof Narendra Kumar", role: "SERF Academy" },
    { name: "Prof Dr Danilo Ditoy", role: "Dean, CAFS" },
    { name: "Prof Dr Husham M Ahmed", role: "Research Director, UTB" },
];

const generalChairs = [
    { name: "Prof Shabana Faizal", role: "Head, DBRC, UTB" },
    { name: "Prof Nidhi Menon", role: "Assistant Professor, CAFS, UTB" },
    { name: "Prof Reem Abdalla", role: "Program Head, BSBI, CAFS, UTB" },
];

export default function ConferenceChairPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Conference Chairs"
                date="14 – 15 October"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Executive Chairs</h2>
                <CommitteeMemberGrid members={executiveChairs} />
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-16">General Chair and Co-Chairs</h2>
                <CommitteeMemberGrid members={generalChairs} />
            </section>
        </div>
    );
}
