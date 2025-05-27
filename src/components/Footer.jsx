'use client';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Address</h3>
                        <ul className="space-y-2 text-light/80">
                            <li>123 Conference Street</li>
                            <li>Manama, Bahrain</li>
                            <li><span className="flex items-center"><FaPhone className="mr-2" /> +973 1234 5678</span></li>
                            <li><span className="flex items-center"><FaEnvelope className="mr-2" /> conference@utb.edu.bh</span></li>
                            <div className="flex space-x-4 mt-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-white">
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-white">
                                    <FaTwitter />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-white">
                                    <FaLinkedin />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-white">
                                    <FaInstagram />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-white">
                                    <FaYoutube />
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">About</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/utb" className="text-light/80 hover:text-white transition-colors">
                                    University of Bahrain (UTB)
                                </Link>
                            </li>
                            <li>
                                <Link href="/important-dates" className="text-light/80 hover:text-white transition-colors">
                                    Important Dates
                                </Link>
                            </li>
                            <li>
                                <Link href="/programme" className="text-light/80 hover:text-white transition-colors">
                                    Programme
                                </Link>
                            </li>
                            <li>
                                <Link href="/accommodation" className="text-light/80 hover:text-white transition-colors">
                                    Accommodation Options
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/upload-paper" className="text-light/80 hover:text-white transition-colors">
                                    Upload Paper
                                </Link>
                            </li>
                            <li>
                                <Link href="/registration" className="text-light/80 hover:text-white transition-colors">
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link href="/downloads" className="text-light/80 hover:text-white transition-colors">
                                    Downloads
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-light/80 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Conference Venue</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5383289183897!2d50.5487!3d26.1528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzEwLjEiTiA1MMKwMzInNTUuMyJF!5e0!3m2!1sen!2sbh!4v1234567890!5m2!1sen!2sbh"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded"
                        ></iframe>
                    </div>
                </div>
                <div className="border-t border-light/20 mt-8 pt-8 text-center text-light/80">
                    <p>SIMDTE &copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;