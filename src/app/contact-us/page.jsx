'use client'
import React from "react";
import AboutHeader from "../../components/common/AboutHeader";

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Contact Us"
                date="14 – 15 October"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col gap-2">
                        <div className="font-bold text-lg flex items-center gap-2">📍 Address</div>
                        <div>University of Technology Bahrain, Building 829, Road 1213, Block 712, Salmabad, Kingdom of Bahrain</div>
                        <div>Conference Venue:<br />InterContinental Bahrain</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col gap-2">
                        <div className="font-bold text-lg flex items-center gap-2">💬 WhatsApp</div>
                        <div><a href="https://wa.me/918290519977">+91 8290519977</a>, <a href="https://wa.me/97333926076">+973 33926076</a></div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col gap-2">
                        <div className="font-bold text-lg flex items-center gap-2">✉️ Email</div>
                        <div><a href="mailto:simdte@utb.edu.bh">simdte@utb.edu.bh</a></div>
                    </div>
                </div>
                {/* Contact Form and Map */}
                <div className="bg-primary text-white text-center text-2xl font-bold py-3 mb-8 rounded">Contact Us</div>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Contact Form */}
                    <form className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder="Your Name" className="flex-1 border border-gray-300 rounded px-3 py-2" required />
                            <input type="email" placeholder="Your Email" className="flex-1 border border-gray-300 rounded px-3 py-2" required />
                        </div>
                        <input type="text" placeholder="Subject" className="border border-gray-300 rounded px-3 py-2" required />
                        <textarea placeholder="Message" className="border border-gray-300 rounded px-3 py-2 min-h-[100px]" required />
                        <button type="submit" aria-label="Send Message" onClick={() => window.open('https://wa.me/97333926076', '_blank')} className="bg-primary text-white font-bold py-3 rounded mt-2 hover:bg-primary-dark transition">Send Message</button>
                    </form>
                    {/* Google Map */}
                    <div className="flex-1 min-h-[300px]">
                        <iframe
                            title="UTB Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3979802536014!2d50.519179799999996!3d26.183729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd12fdcfc07%3A0x7dc8a621795a72f3!2sUniversity%20of%20Technology%20Bahrain%20-%20UTB!5e0!3m2!1sen!2sin!4v1748862272030!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
