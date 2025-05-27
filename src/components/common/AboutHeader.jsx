import React from "react";

export default function AboutHeader() {
    return (
        <div className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(rgba(208,34,74,0.85),rgba(35,35,53,0.85)), url('/images/utb-images/gallery/BG6A0073.jpg') center/cover` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#d0224a] opacity-80"></div>
            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 md:px-0">
                <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between h-full">
                    <div className="flex-1 flex flex-col justify-center items-start text-left">
                        <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">SIM<span className="text-primary">DTE</span></div>
                        <div className="uppercase text-white tracking-widest text-xs md:text-sm font-semibold mb-6 max-w-md">Sustainable Innovations in Management in the Digital Transformation Era</div>
                        <div className="text-2xl md:text-3xl font-bold text-white mt-4 md:mt-8">University Profile</div>
                    </div>
                    <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-8">
                        <div className="bg-white text-primary font-bold text-lg md:text-xl px-6 py-2 rounded shadow-lg border-2 border-primary">14 – 15 October</div>
                    </div>
                </div>
            </div>
        </div>
    );
} 