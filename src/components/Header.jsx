'use client'
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = {
        "/": "HOME",
        "ABOUT": {
            "UTB": 'UTB',
            'Important Dates': 'Important Dates',
            'Programme': 'Programme',
            'Accomondation Options': 'Accomondation Options'
        },
        "COMMITTEES": {
            "Conference Chair": "Conference Chair",
            "Organizing Committee": "Organizing Committee",
            "Review Committee": "Review Committee",
            "Other Committees": "Other Committees",
        },
        "REGISTRATION": "REGISTRATION",
        "UPLOAD PAPER": "UPLOAD PAPER",
        "DOWNLOADS": "DOWNLOADS",
        "CONTACT US": "CONTACT US"
    }

    const renderLink = (key, value) => {
        if (typeof value === 'string') {
            return (
                <Link
                    key={key}
                    href={`/${key.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-black hover:text-secondary transition-colors font-bold block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {value}
                </Link>
            );
        } else {
            return (
                <div key={key} className="relative group">
                    <button className="text-black hover:text-secondary transition-colors font-bold flex items-center gap-1 w-full py-2">
                        {key}
                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <div className="md:invisible md:group-hover:visible md:absolute md:border md:border-gray-300 md:top-full md:left-0 md:mt-2 md:w-64 md:bg-white md:shadow-lg md:rounded-md md:py-2 md:z-50 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-300 pl-4 md:pl-0">
                        {Object.entries(value).map(([subKey, subValue]) => (
                            <Link
                                key={subKey}
                                href={`/${key.toLowerCase().replace(/\s+/g, '-')}/${subKey.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {subValue}
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }
    };

    return (
        <header className="bg-light shadow-md">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-black">
                        <Link href="/">
                            <img src="/images/utb.svg" alt="UTB Logo" className="h-12" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {Object.entries(links).map(([key, value]) => renderLink(key, value))}
                    </div>
                    <button
                        className="md:hidden text-primary hover:text-secondary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="mt-8 space-y-4">
                            {Object.entries(links).map(([key, value]) => renderLink(key, value))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;