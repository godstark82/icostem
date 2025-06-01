import Link from 'next/link';

const Header = () => {
    const links = {
        "HOME": "HOME",
        "ABOUT": {
            "UTB": 'UTB',
            'IMPORTANT DATES': 'IMPORTANT DATES',
            'PROGRAMME': 'PROGRAMME',
            'ACCOMONDATION OPTIONS': 'ACCOMONDATION OPTIONS'
        },
        "COMMITTEES": {
            "CONFERENCE CHAIR": "CONFERENCE CHAIR",
            "ORGANIZING COMMITTEE": "ORGANIZING COMMITTEE",
            "REVIEW COMMITTEE": "REVIEW COMMITTEE",
            "OTHER COMMITTEES": "OTHER COMMITTEES",
        },
        "REGISTRATION": "REGISTRATION",
        "UPLOAD PAPER": "UPLOAD PAPER",
        "DOWNLOADS": "DOWNLOADS",
        "CONTACT US": "CONTACT US"
    }

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
                        {Object.entries(links).map(([key, value]) => {
                            if (typeof value === 'string') {
                                return (
                                    <Link
                                        key={key}
                                        href={`/${key.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-black hover:text-secondary transition-colors font-bold"
                                    >
                                        {value}
                                    </Link>
                                );
                            } else {
                                return (
                                    <div
                                        key={key}
                                        className="relative group"
                                    >
                                        <button className="text-black hover:text-secondary transition-colors font-bold flex items-center gap-1">
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
                                        <div className="invisible group-hover:visible absolute border border-gray-300 top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            {Object.entries(value).map(([subKey, subValue]) => (
                                                <Link
                                                    key={subKey}
                                                    href={`/${key.toLowerCase().replace(/\s+/g, '-')}/${subKey.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                                                >
                                                    {subValue}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <button className="md:hidden text-primary hover:text-secondary">
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