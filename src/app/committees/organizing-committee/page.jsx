import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";


const organizingCommitteeMembers = [
    { name: "Prof Jayendra Shankar", role: "CAFS, UTB" },
    { name: "Ms Mariam Alsalman", role: "CAFS, UTB" },
    { name: "Prof Farheen Akram", role: "CAFS, UTB" },
    { name: "Prof Omar Ahmed Alhawi", role: "DSA, UTB" },
    { name: "Mr Amer Bittar", role: "MarCom, UTB" },
    { name: "Ms Rosemarie Rosales", role: "Procurement, UTB" },
    { name: "Ms Faten Obaidat", role: "VPAA Office, UTB" },
    { name: "Mr Rutherford Antipolo", role: "ITC, UTB" },
    { name: "Prof Chandra Mohan", role: "KRMU, India" },
    { name: "Prof Yogendra Rajoria", role: "KRMU, India" },
];

export default function OrganizingCommitteePage() {
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

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Organising Committee</h2>
                <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12"></div>
                <CommitteeMemberGrid members={organizingCommitteeMembers} />
            </section>
        </div>
    );
}
