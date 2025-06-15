import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const executiveChairs = [
    { name: "Dr Haitham Alqahtani", role: "Vice President for Academic Affairs, UTB" },
    { name: "Dr Narendra Kumar", role: "NIET,NIMS University,India" },
    { name: "Dr Danilo Ditoy", role: "Dean, CAFS" },
    { name: "Prof Husham M Ahmed", role: "Research Director, UTB" },
];

const generalChairs = [
    { name: "Dr Shabana Faizal", role: "Head, DBRC, UTB" },
    { name: "Dr Nidhi Menon", role: "Assistant Professor, CAFS, UTB" },
    { name: "Dr Reem Abdalla", role: "Programme Head, BSBI, CAFS, UTB" },
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
