import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const reviewCommitteeMembers = [
    { name: "Miodrag Potkonjak", role: "Professor, CS Dept. UCLA. Los Angeles" },
    { name: "Dr. Mohd Muntjir", role: "Professor, Taif Uni. Kingdom of Saudi Arabia" },
    { name: "Dr. Tapan K. Gandhi", role: "Indian Institute of Technology, Delhi" },
    { name: "Dr. R. K. Sharma", role: "Chief Scientist & Head, CSIR-CEERI, Pilani" },
    { name: "Dr. Asit K Saha", role: "Dean Research, HIT, Haldia,CS" },
    { name: "Dr. D.K. Lobiyal", role: "JLN University New Delhi, CS Dept." },
    { name: "Dr. Hari Kishan Kondaveeti", role: "VIT-AP University, Andhra Pradesh" },
    { name: "Dr. Sri Ram Chandra Polisetty", role: "Professor, GIET (A) Rajahmudry, AP" },
    { name: "Dr. Balu John", role: "Dept of CSE. GEC Sreekrishnapuram, Palakkad, Kerala" },
    { name: "Dr. Richa Gupta", role: "Jamia Hamdard University, Delhi, India" },
    { name: "Dr.L.R.Aravind Babu", role: "Dept. of CS Annamalai University, Tamilnadu" },
    { name: "Dr. Rudra Banerjee", role: "SRM Institute of Science and Technology, India" },
    { name: "Dr. Satyasundara Mahapatra", role: "Prof. Dept. of CS Pranveer Singh Institute of Technology Bhauti" },
    { name: "Dr. M N Shelar", role: "Associate Professor & Head, Dept. of CS Nashik, Maharashtra" },
    { name: "Dr. Faraz Farishta", role: "Professor, Medi Citi Institute of Medical Sciences, India" },
    { name: "Dr. Kush", role: "Asso. Prof. & Head Dept. of CS, IIHS , Kurukshetra University" },
    { name: "Dr. Sukhdev Roy", role: "Prof. & Head Dept. of Physics & CS, DEI Uni. Dayalbagh, Agra" },
    { name: "Dr. D.K. Lobiyal", role: "Professor, School of Computer and Systems Sci. JLN University" },
    { name: "Dr. Mohammad Nasar", role: "Asst. Professor, Mazoon College, Muscat, Sultanate of Oman" },
    { name: "Dr. M. Chinnadurai", role: "Prof. & Head/CSE Pillay Engineering College(Autonomous), Nagore" },
    { name: "Dr. M.Lalitha", role: "Asst. Prof. G Narayanamma Institute of Tech. & Sci. Hyderabad" },
    { name: "Dr. Ankit Rajpal", role: "Asst. Prof. Dept. of CS, Faculty of Mathematical Sci. DU, Delhi" },
    { name: "Dr. P. Kiransree", role: "Head, Dept of CS, SVCOEFW, Bhimavaram, Andhra Pradesh" }
];

export default function ReviewCommitteePage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Committees"
                date="5 - 7 September"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Technical Advisory Board</h2>
                <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12"></div>
                <CommitteeMemberGrid members={reviewCommitteeMembers} />
            </section>
        </div>
    );
}
