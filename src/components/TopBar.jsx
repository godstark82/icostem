import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaClock, FaPhoneAlt } from 'react-icons/fa';

const TopBar = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="hidden sm:block bg-[#E5E5E5] text-light py-2 w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm flex items-center">
                        <FaClock className="inline-block mr-2 bg-primary text-white rounded h-5 w-5 p-1" />
                        <span className="text-black">{dateString}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-sm flex items-center">
                            <FaPhoneAlt className='inline-block mr-2 text-primary' />
                            <span className='text-black font-bold'><a href="https://wa.me/8209346745" target="_blank" rel="noopener noreferrer">+91 8209346745</a></span>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://www.facebook.com/aryacollegein/" target='_blank' className="hover:text-secondary transition-colors" aria-label="Facebook">
                                <FaFacebook className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://x.com/aryacolleges" target='_blank' className="hover:text-secondary transition-colors" aria-label="Twitter">
                                <FaTwitter className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://www.instagram.com/aryacollege/" className="hover:text-secondary transition-colors" aria-label="Instagram">
                                <FaInstagram className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://in.linkedin.com/school/aryacollege/" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                                <FaLinkedin className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://www.youtube.com/user/AryaColleges" className="hover:text-secondary transition-colors" aria-label="YouTube">
                                <FaYoutube className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;