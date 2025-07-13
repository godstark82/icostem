import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Address</h3>
                        <ul className="space-y-3 text-light/80">
                            <li className='flex items-center gap-2'>
                                <FaMapMarkerAlt className="text-primary size-7" />
                                <p>Arya College, Jaipur, Kukas SP-40, RIICO Industrial Area, Kukas, Jaipur, Rajasthan, 302028</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhone className="text-primary" />
                                <a href="https://wa.me/97333926076"><span>+973 33926076</span></a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-primary" />
                                <span><a href="mailto:icostem@utb.edu.bh">icostem@utb.edu.bh</a></span>
                            </li>
                            <div className="flex space-x-4 pt-2">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaYoutube size={20} />
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">About</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about/utb" className="text-light/80 hover:text-primary transition-colors block">
                                    Arya College, Jaipur
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/important-dates" className="text-light/80 hover:text-primary transition-colors block">
                                    Important Dates
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/programme" className="text-light/80 hover:text-primary transition-colors block">
                                    Programme
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/accommodation-options" className="text-light/80 hover:text-primary transition-colors block">
                                    Accommodation Options
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/upload-paper" className="text-light/80 hover:text-primary transition-colors block">
                                    Upload Paper
                                </Link>
                            </li>
                            <li>
                                <Link href="/registration" className="text-light/80 hover:text-primary transition-colors block">
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link href="/downloads" className="text-light/80 hover:text-primary transition-colors block">
                                    Downloads
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-light/80 hover:text-primary transition-colors block">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin" className="text-light/80 hover:text-primary transition-colors block">
                                    Administrator
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Conference Venue</h3>
                        <div className="aspect-w-16 aspect-h-9 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.010604890812!2d75.89097488041605!3d27.029830829634673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daff75daffa4d%3A0x3b7007c44ebf96df!2sArya%20Main%20Campus!5e0!3m2!1sen!2sin!4v1752416379856!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="border-t border-light/20 mt-8 pt-8 text-center text-light/80">
                    <p className="text-sm">ICOSTEM &copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;