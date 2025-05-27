'use client';
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock } from 'react-icons/fa';

const TopBar = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options = { 
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            setCurrentDateTime(now.toLocaleString('en-US', options));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900 text-white py-2">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-sm">
                    <FaClock className="inline-block mr-2" /> {currentDateTime}
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300 transition-colors">
                        <FaFacebook  />
                    </a>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar; 