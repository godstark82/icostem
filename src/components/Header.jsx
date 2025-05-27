'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';

const Header = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const timeoutRef = useRef(null);

    const links = {
        "HOME" :  "HOME",
        "ABOUT" : {
            "ABOUT UNI": 'ABOUT UNIVERSITY'
        },
        "COMMITTEES": {
            "TECH COMMITTEE": "TECH COMMITTEE",
            "PUBLICATION COMMITTEE": "PUBLICATION COMMITTEE",
            "ORGANIZING COMMITTEE": "ORGANIZING COMMITTEE",
        },
        "REGISTRATION": "REGISTRATION",
        "UPLOAD PAPER": "UPLOAD PAPER",
        "DOWNLOADS": "DOWNLOADS",
        "CONTACT US": "CONTACT US"
    }

    const handleMouseEnter = (key) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setHoveredItem(key);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredItem(null);
        }, 100);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">
                        <img src="/images/utb.svg" alt="UTB Logo" className="h-12" />
                    </Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {Object.entries(links).map(([key, value]) => {
                            if (typeof value === 'string') {
                                return (
                                    <Link 
                                        key={key}
                                        href={`/${key.toLowerCase().replace(/\s+/g, '-')}`} 
                                        className="text-gray-600 hover:text-gray-900 font-bold transition-colors"
                                    >
                                        {value}
                                    </Link>
                                );
                            } else {
                                return (
                                    <div 
                                        key={key}
                                        className="relative"
                                        onMouseEnter={() => handleMouseEnter(key)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <button className="text-gray-600 hover:text-gray-900 font-bold transition-colors flex items-center gap-1">
                                            {key}
                                            <svg 
                                                className={`w-4 h-4 transition-transform duration-200 ${hoveredItem === key ? 'rotate-180' : ''}`}
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
                                        {hoveredItem === key && (
                                            <div 
                                                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                                                onMouseEnter={() => handleMouseEnter(key)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                {Object.entries(value).map(([subKey, subValue]) => (
                                                    <Link
                                                        key={subKey}
                                                        href={`/${key.toLowerCase().replace(/\s+/g, '-')}/${subKey.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                                                        onClick={() => setHoveredItem(null)}
                                                    >
                                                        {subValue}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <button className="md:hidden text-gray-600 hover:text-gray-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;