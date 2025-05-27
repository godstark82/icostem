'use client';
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock, FaPhone, FaPhoneAlt } from 'react-icons/fa';

const TopBar = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#E5E5E5] text-light py-1 w-full">
            <div className="flex justify-between items-center w-full px-12">
                <div className="text-sm">
                    <FaClock className="inline-block mr-2 bg-primary text-white rounded h-5 w-5 p-1" /> {currentTime}
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-sm flex items-center">   
                        <FaPhoneAlt className='inline-block mr-2 text-primary' />
                        <span className='text-black font-bold'>+91 9876543210</span>
                    </div>
                    <div className="flex space-x-2">
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaFacebook className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaTwitter className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaInstagram className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors">
                            <FaLinkedin className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;