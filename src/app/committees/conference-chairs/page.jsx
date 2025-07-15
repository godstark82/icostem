import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const chiefPatron = [
    {
        name: "Er. Anurag Agarwal",
        role: "Chief Patron",
        affiliation: "Chairman, Arya College of Engg. & I.T., Jaipur"
    }
];

const chairman = [
    {
        name: "Dr. Akhil Pandey",
        role: "Chairman",
        affiliation: "Director, AIC, Arya College of Engg. & I.T., Jaipur"
    }
];

const advisors = [
    {
        name: "Dr. Arun Kumar Arya",
        role: "Advisor",
        affiliation: "Principal, Arya College of Engg. & I.T., Jaipur"
    },
    {
        name: "Dr. Ashok Kumar Kajla",
        role: "Advisor",
        affiliation: "Professor, Arya College of Engg. & I.T., Jaipur"
    }
];

const conveners = [
    {
        name: "Dr. Krishan Kant Lavania",
        role: "Convener",
        affiliation: "Professor, Arya College of Engg. & I.T., Jaipur"
    },
    {
        name: "Dr. Vishal Shrivastava",
        role: "Co-Convener",
        affiliation: "Arya College of Engg. & I.T., Jaipur"
    },
    {
        name: "Mr. Rahul Sharma",
        role: "Co-Convener",
        affiliation: "Arya College of Engg. & I.T., Jaipur"
    }
];

const organizingSecretary = [
    {
        name: "Dr. Vibhakar Pathak",
        role: "Organizing Secretary",
        affiliation: "Professor, Arya College of Engg. & I.T., Jaipur"
    }
];

export default function ConferenceChairPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Conference Chairs"
                date="5 - 7 September"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Chief Patron</h2>
                <CommitteeMemberGrid members={chiefPatron.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Chairman</h2>
                <CommitteeMemberGrid members={chairman.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Advisors</h2>
                <CommitteeMemberGrid members={advisors.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Conveners & Co-Conveners</h2>
                <CommitteeMemberGrid members={conveners.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organizing Secretary</h2>
                <CommitteeMemberGrid members={organizingSecretary.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />
            </section>
        </div>
    );
}
